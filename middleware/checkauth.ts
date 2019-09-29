import jwt from "jsonwebtoken";
import { JSONRPCError } from "@open-rpc/server-js";

export const checkJWT = (token: string) => {
  try {
    jwt.verify(token, "enApi");
  } catch (error) {
    console.log("jwt errors");
    throw new JSONRPCError("error: ", 420, "Token Error");
  }
};
