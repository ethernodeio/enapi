import { CreateUser, Login, GetUser } from "../__GENERATED_TYPES__/index.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import Account from "../models/account";
import bcrypt from "bcrypt";
import { checkJWT } from "../middleware/checkauth";

// json-rpc methods
export const createUser: CreateUser = async (userName, password, userRole) => {
  const newUser = await dbCreateUser(userName, password, userRole);
  return newUser;
};

export const login: Login = async (userName, password) => {
  const userLogin = await dbUserLogin(userName, password);
  return userLogin;
};

export const getUser: GetUser = async (token, userName) => {
  const getUserInfo = await dbGetUser(token, userName);
  return getUserInfo;
};

// #####MODELS FOR METHODS #####
const dbCreateUser = async (userName: string, password: string, userRole: string): Promise<any> => {
  const result = await Account.find({ userName }).exec();
  if (result.length > 0) {
    throw new Error("User Exists");
  } else {
    const hash = await bcrypt.hash(password, 10);
    const account = new Account({
      _id: new mongoose.Types.ObjectId(),
      userName,
      password: hash,
      userRole,
    });
    account.save();
    return { status: "success", message: "account Created" };
  }
};

const dbUserLogin = async (userName: string, password: string): Promise<any> => {
  const result = await Account.find({ userName }).exec();
  if (result.length > 0) {
    const correct = await bcrypt.compare(password, result[0].password);
    if (correct) {
      const token = jwt.sign(
        {
          user_Id: result[0]._id,
          email: result[0].email,
        },
        "enApi");
      return ({ status: "success", userName: result[0].userName, token, nodes: result[0].nodes });
    } else {
      throw new Error("Auth Error");
    }
  } else {
    throw new Error("Auth Error");
  }
};

const dbGetUser = async (token: string, userName: string): Promise<any> => {
  const myToken = await checkJWT(token);
  console.log("Getting user");
  const result = await Account.findOne({ userName }).select("-password").exec();
  return result;
};
