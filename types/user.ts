export interface APIUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  banned: boolean;
}

export interface APIAuth {
  user: APIUser;
  token: string;
}
