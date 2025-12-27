"use server";

import jwt, { JwtPayload } from "jsonwebtoken";

export interface AccessTokenPayload extends JwtPayload {
  userId: string;
  role: "ADMIN" | "GUIDE" | "TOURIST";
  email?: string;
}

export function verifyAccessToken(token: string): AccessTokenPayload {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET
  ) as AccessTokenPayload;

  return decoded;
}
