import { CreateUser, Login, GetUser } from "../__GENERATED_TYPES__/index.js";
import { Web3ClientVersion } from "../__GENERATED_TYPES__";

// json-rpc methods
export const createUser: CreateUser = async (userName, password, userRole) => {
  const newUser = await dbCreateUser(userName, password, userRole);
  console.log("newUser", newUser);
  return newUser;
};

export const login: Login = async (userName, password) => {
  const userLogin = await dbUserLogin(userName, password);
  console.log("userLogin", userLogin);
  return userLogin;
};

export const getUser: GetUser = async (userName) => {
  const getUserInfo = await dbGetUser(userName);
  console.log("user Info:", getUserInfo);
  return getUserInfo;
};

// #####FUNCTIONS FOR METHODS #####
const dbCreateUser = (userName: string, password: string, userRole: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userName });
    }, 5000);

  });
};

const dbUserLogin = (userName: string, password: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    resolve({
      userName,
      password,
    });
  });
};

const dbGetUser = (userName: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    resolve({
      userName,
    });
  });
};
