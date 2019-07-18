import jwt from "jsonwebtoken";

export const checkJWT = (token: string) => {
  try {
    jwt.verify(token, "enApi");
  } catch (error) {
    console.log("jwt errors");
    throw new Error("auth error");
  }
};
