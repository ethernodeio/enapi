import { AddNode, RemoveNode, GetNodeContainerInfo } from "../__GENERATED_TYPES__/index.js";

export const addNode: AddNode = async (userName, nodeName, nodeNetwork, synctType) => {
  return new Promise((resolve, reject) => {
    resolve({
      status: "success",
      message: "node added",
    });
  });
};

export const removeNode: RemoveNode = async (userName, containerId, nodeName) => {
  return new Promise((resolve, reject) => {
    resolve({
      status: "success",
      message: "Node Removed",
    });
  });
};

export const getNodeContainerInfo: GetNodeContainerInfo = async (userName, containerId) => {
  return new Promise((resolve, reject) => {
    resolve({
      status: "success",
      message: "Container Info",
    });
  });
};
