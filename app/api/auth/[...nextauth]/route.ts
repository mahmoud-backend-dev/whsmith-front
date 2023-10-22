import { NextAuthOptions } from "next-auth";
import { ipAddress } from "@vercel/edge";
import { NextApiRequest } from "next";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import RateLimit from "@/utils/rate-limit";
import { NextResponse } from "next/server";
import axios from "axios";
import { APIUser } from "@/types/user";

const ratelimit = RateLimit({
  interval: 15 * 60 * 1000,
});

const axiosInstance = (token?: string) =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Bypass-Rate-Limit-Token": process.env.RATE_LIMIT_TOKEN,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        const { email, password } = credentials;

        const res = await axiosInstance()
          .post("/auth/login", {
            email,
            password,
          })
          .catch((err) => {
            throw err.response?.data || err;
          });

        return res.data;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, token: user.token, user: user.user };

      return token;
    },

    async session({ session, token }) {
      const { data } = await axiosInstance(token?.token)
        .get<{ user: APIUser }>("/user/profile")
        .catch((err) => {
          console.log(err);
          throw err.response?.data || err;
        });

      session.user = data.user;
      session.token = token.token;

      return session;
    },
  },

  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out",
    error: "/sign-in",
  },
};

const next = NextAuth(authOptions);

const handler = async (req: NextApiRequest, ...args: any[]) => {
  const ip = ipAddress(req as any) || "127.0.0.1";

  const { isRateLimited, limit, remaining } = ratelimit.limit(100, ip);

  if (isRateLimited) {
    return NextResponse.json(
      {
        status: 429,
      },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
        },
      }
    );
  }

  return await next(req, ...args);
};

export { handler as GET, handler as POST };
