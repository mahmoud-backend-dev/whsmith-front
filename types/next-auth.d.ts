import "next-auth";
import "next-auth/jwt";
import { APIAuth, APIUser } from "./user";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      banned: boolean;
    };

    token: string;
  }

  interface User extends APIAuth {}
}

declare module "next-auth/jwt" {
  interface JWT {
    user: APIUser;
    token: string;
  }
}
