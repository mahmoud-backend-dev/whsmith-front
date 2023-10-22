import { Order, OrderStatus, Store } from "@/types";
import { APIUser } from "@/types/user";
import { string } from "yup";

export const YUP_PASSWORD = string()
  .min(8)
  .max(50)
  .matches(/(?=.*[0-9])/, "Password must contain at least 1 number")
  .matches(/(?=.*[a-z])/, "Password must contain at least 1 lowercase letter")
  .matches(/(?=.*[A-Z])/, "Password must contain at least 1 uppercase letter")
  .required();

export interface Role {
  name: string;
  permissions: bigint;
}

export const roles: Role[] = [
  {
    name: "Admin",
    permissions: 0n,
  },
  {
    name: "Store Owner",
    permissions: 0n,
  },
  {
    name: "Store Manager",
    permissions: 0n,
  },
  {
    name: "Store Employee",
    permissions: 0n,
  },
];

export const users: APIUser[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "fake_email@example.com",
    banned: false,
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Doe",
    email: "fake_email2@example.com",
    banned: false,
  },
  {
    id: "3",
    firstName: "John",
    lastName: "Smith",
    email: "fake_email3@example.com",
    banned: true,
  },
];

export interface Admin extends APIUser {
  roles: Role[];
}

export const admins: Admin[] = [
  {
    ...users[0],
    roles: [roles[0]],
  },
  {
    ...users[1],
    roles: [roles[0], roles[1]],
  },
  {
    ...users[2],
    roles: [roles[3]],
  },
];

export enum ErrorCode {
  InvalidCredentials = "INVALID_CREDENTIALS",
  EmailNotVerified = "EMAIL_NOT_VERIFIED",
  EmailAlreadyExists = "EMAIL_ALREADY_EXISTS",
}
