import { APIUser } from "@/types/user";

export const fullName = (user: APIUser) => `${user.firstName} ${user.lastName}`;
