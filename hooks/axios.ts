import originalAxios from "axios";
import { useSession } from "next-auth/react";

const useAxios = () => {
  const { data, status } = useSession();

  return originalAxios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization:
        status === "authenticated" ? `Bearer ${data.token}` : undefined,
    },
  });
};

export default useAxios;
