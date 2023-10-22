import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { get } from "lodash";
import { getServerSession } from "next-auth";

export const getSession = () => getServerSession(authOptions);
