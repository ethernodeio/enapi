
#[macro_use]
extern crate jsonrpc_client_core;
use serde::{Serialize, Deserialize};

#[cfg(test)]
use autorand::Random;

#[cfg(test)]
mod test_harness;

pub type UserName = String;
pub type Password = String;
pub type UserRole = String;
pub type JwTtoken = String;
pub type UserId = String;
pub type NodeName = String;
pub type NodeNetwork = String;
pub type SyncType = String;
pub type RpcApi = bool;
pub type WsApi = bool;
pub type ContainerId = String;
pub type RemoveNodeData = bool;
pub type SolVersion = String;
pub type SolCode = String;
pub type Web3CallMethod = String;
pub type Web3CallParams = Vec<Option<serde_json::Value>>;
pub type RpcId = f64;
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[cfg_attr(test, derive(Random))]
#[serde(untagged)]
pub enum RemoveNode {
    AnythingArray(Vec<Option<serde_json::Value>>),

    Bool(bool),

    Double(f64),

    Integer(i64),

    RemoveNodeClass(RemoveNodeClass),

    String(String),
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[cfg_attr(test, derive(Random))]
#[serde(untagged)]
pub enum GetNodeContainer {
    AnythingArray(Vec<Option<serde_json::Value>>),

    Bool(bool),

    Double(f64),

    GetNodeContainerClass(GetNodeContainerClass),

    Integer(i64),

    String(String),
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[cfg_attr(test, derive(Random))]
pub struct CreateUser {
    /// Success, returns info on new user.
    #[serde(rename = "message")]
    message: Option<String>,

    /// Return Success
    #[serde(rename = "status")]
    status: Option<String>,
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[cfg_attr(test, derive(Random))]
pub struct DeleteUser {
    /// Returns user removed result
    #[serde(rename = "message")]
    message: Option<String>,

    /// Return Success
    #[serde(rename = "status")]
    status: Option<String>,
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[cfg_attr(test, derive(Random))]
pub struct Login {
    /// Returns: user info and auth token
    #[serde(rename = "message")]
    message: Option<String>,

    /// Returns: 'Success'
    #[serde(rename = "status")]
    status: Option<String>,
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[cfg_attr(test, derive(Random))]
pub struct GetUser {
    /// returns users info and all associated params
    #[serde(rename = "message")]
    message: Option<String>,

    /// Response success
    #[serde(rename = "status")]
    status: Option<String>,

    #[serde(rename = "response")]
    response: Option<serde_json::Value>,
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[cfg_attr(test, derive(Random))]
pub struct AddNode {
    /// If returns node docker container info
    #[serde(rename = "message")]
    message: Option<String>,

    /// Returns: 'Success'
    #[serde(rename = "status")]
    status: Option<String>,

    #[serde(rename = "response")]
    response: Option<serde_json::Value>,
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[cfg_attr(test, derive(Random))]
pub struct RemoveNodeClass {
    /// Returns deletion info
    #[serde(rename = "message")]
    message: Option<String>,

    /// Returns Success
    #[serde(rename = "status")]
    status: Option<String>,
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[cfg_attr(test, derive(Random))]
pub struct GetNodeContainerClass {
    /// Returns info about docker contianer node is running in.
    #[serde(rename = "message")]
    message: Option<String>,

    /// Returns: 'Success'
    #[serde(rename = "status")]
    status: Option<String>,
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[cfg_attr(test, derive(Random))]
pub struct SolCompile {
    /// Returns solidity code in bytecode, warnings and other params
    #[serde(rename = "message")]
    message: Option<String>,

    /// Returns: 'success'
    #[serde(rename = "status")]
    status: Option<String>,
}
#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[cfg_attr(test, derive(Random))]
pub struct Web3CallResult {
    /// Returns the web3 call data from your node
    #[serde(rename = "message")]
    message: Option<String>,

    /// Returns: 'Success'
    #[serde(rename = "status")]
    status: Option<String>,
}

jsonrpc_client!(pub struct EnAPIOpenRPCJsonRpcAPI {
  pub fn createUser(&mut self, userName: UserName, password: Password, userRole: UserRole) -> RpcRequest<CreateUser>;
pub fn deleteUser(&mut self, JWTtoken: JwTtoken, userId: UserId) -> RpcRequest<DeleteUser>;
pub fn login(&mut self, userName: UserName, password: Password) -> RpcRequest<Login>;
pub fn getUser(&mut self, JWTtoken: JwTtoken, userName: UserName) -> RpcRequest<GetUser>;
pub fn addNode(&mut self, JWTtoken: JwTtoken, userName: UserName, nodeName: NodeName, nodeNetwork: NodeNetwork, syncType: SyncType, rpcApi: RpcApi, wsApi: WsApi) -> RpcRequest<AddNode>;
pub fn removeNode(&mut self, JWTtoken: JwTtoken, userName: UserName, containerId: ContainerId, nodeName: NodeName, removeNodeData: RemoveNodeData) -> RpcRequest<RemoveNode>;
pub fn getNodeContainerInfo(&mut self, JWTtoken: JwTtoken, containerId: ContainerId) -> RpcRequest<GetNodeContainer>;
pub fn sol_compile(&mut self, solVersion: SolVersion, solCode: SolCode) -> RpcRequest<SolCompile>;
pub fn ethRpcCall(&mut self, userName: UserName, nodeName: NodeName, nodeNetwork: NodeNetwork, web3callMethod: Web3CallMethod, web3callParams: Web3CallParams, rpcId: RpcId) -> RpcRequest<Web3CallResult>;
});

#[cfg(test)]
mod tests {
    use super::*;
    use test_harness::*;
    use autorand::Random;
    use futures::Future;


  
    #[test]
    #[allow(non_snake_case)]
    fn createUser_test () {
        let method = "createUser".into();

        let mut params = Vec::new();
  
        let UserName_value = UserName::random();
        let serialized = serde_json::to_value(&UserName_value).unwrap();
        params.push(serialized);
  
        let Password_value = Password::random();
        let serialized = serde_json::to_value(&Password_value).unwrap();
        params.push(serialized);
  
        let UserRole_value = UserRole::random();
        let serialized = serde_json::to_value(&UserRole_value).unwrap();
        params.push(serialized);
  
        let result = CreateUser::random();
        let result_serialized = serde_json::to_vec(&result).unwrap();
        let result: CreateUser = serde_json::from_slice(&result_serialized).unwrap();

        let transport = MockTransport {
            method,
            params,
            result: serde_json::to_value(&result).unwrap(),
        };

        let mut client = EnAPIOpenRPCJsonRpcAPI::new(transport);
        let received_result = client.createUser(
          UserName_value, Password_value, UserRole_value
        ).wait().unwrap();

        let result_s =
        assert_eq!(result, received_result);
    }

  
    #[test]
    #[allow(non_snake_case)]
    fn deleteUser_test () {
        let method = "deleteUser".into();

        let mut params = Vec::new();
  
        let JwTtoken_value = JwTtoken::random();
        let serialized = serde_json::to_value(&JwTtoken_value).unwrap();
        params.push(serialized);
  
        let UserId_value = UserId::random();
        let serialized = serde_json::to_value(&UserId_value).unwrap();
        params.push(serialized);
  
        let result = DeleteUser::random();
        let result_serialized = serde_json::to_vec(&result).unwrap();
        let result: DeleteUser = serde_json::from_slice(&result_serialized).unwrap();

        let transport = MockTransport {
            method,
            params,
            result: serde_json::to_value(&result).unwrap(),
        };

        let mut client = EnAPIOpenRPCJsonRpcAPI::new(transport);
        let received_result = client.deleteUser(
          JwTtoken_value, UserId_value
        ).wait().unwrap();

        let result_s =
        assert_eq!(result, received_result);
    }

  
    #[test]
    #[allow(non_snake_case)]
    fn login_test () {
        let method = "login".into();

        let mut params = Vec::new();
  
        let UserName_value = UserName::random();
        let serialized = serde_json::to_value(&UserName_value).unwrap();
        params.push(serialized);
  
        let Password_value = Password::random();
        let serialized = serde_json::to_value(&Password_value).unwrap();
        params.push(serialized);
  
        let result = Login::random();
        let result_serialized = serde_json::to_vec(&result).unwrap();
        let result: Login = serde_json::from_slice(&result_serialized).unwrap();

        let transport = MockTransport {
            method,
            params,
            result: serde_json::to_value(&result).unwrap(),
        };

        let mut client = EnAPIOpenRPCJsonRpcAPI::new(transport);
        let received_result = client.login(
          UserName_value, Password_value
        ).wait().unwrap();

        let result_s =
        assert_eq!(result, received_result);
    }

  
    #[test]
    #[allow(non_snake_case)]
    fn getUser_test () {
        let method = "getUser".into();

        let mut params = Vec::new();
  
        let JwTtoken_value = JwTtoken::random();
        let serialized = serde_json::to_value(&JwTtoken_value).unwrap();
        params.push(serialized);
  
        let UserName_value = UserName::random();
        let serialized = serde_json::to_value(&UserName_value).unwrap();
        params.push(serialized);
  
        let result = GetUser::random();
        let result_serialized = serde_json::to_vec(&result).unwrap();
        let result: GetUser = serde_json::from_slice(&result_serialized).unwrap();

        let transport = MockTransport {
            method,
            params,
            result: serde_json::to_value(&result).unwrap(),
        };

        let mut client = EnAPIOpenRPCJsonRpcAPI::new(transport);
        let received_result = client.getUser(
          JwTtoken_value, UserName_value
        ).wait().unwrap();

        let result_s =
        assert_eq!(result, received_result);
    }

  
    #[test]
    #[allow(non_snake_case)]
    fn addNode_test () {
        let method = "addNode".into();

        let mut params = Vec::new();
  
        let JwTtoken_value = JwTtoken::random();
        let serialized = serde_json::to_value(&JwTtoken_value).unwrap();
        params.push(serialized);
  
        let UserName_value = UserName::random();
        let serialized = serde_json::to_value(&UserName_value).unwrap();
        params.push(serialized);
  
        let NodeName_value = NodeName::random();
        let serialized = serde_json::to_value(&NodeName_value).unwrap();
        params.push(serialized);
  
        let NodeNetwork_value = NodeNetwork::random();
        let serialized = serde_json::to_value(&NodeNetwork_value).unwrap();
        params.push(serialized);
  
        let SyncType_value = SyncType::random();
        let serialized = serde_json::to_value(&SyncType_value).unwrap();
        params.push(serialized);
  
        let RpcApi_value = RpcApi::random();
        let serialized = serde_json::to_value(&RpcApi_value).unwrap();
        params.push(serialized);
  
        let WsApi_value = WsApi::random();
        let serialized = serde_json::to_value(&WsApi_value).unwrap();
        params.push(serialized);
  
        let result = AddNode::random();
        let result_serialized = serde_json::to_vec(&result).unwrap();
        let result: AddNode = serde_json::from_slice(&result_serialized).unwrap();

        let transport = MockTransport {
            method,
            params,
            result: serde_json::to_value(&result).unwrap(),
        };

        let mut client = EnAPIOpenRPCJsonRpcAPI::new(transport);
        let received_result = client.addNode(
          JwTtoken_value, UserName_value, NodeName_value, NodeNetwork_value, SyncType_value, RpcApi_value, WsApi_value
        ).wait().unwrap();

        let result_s =
        assert_eq!(result, received_result);
    }

  
    #[test]
    #[allow(non_snake_case)]
    fn removeNode_test () {
        let method = "removeNode".into();

        let mut params = Vec::new();
  
        let JwTtoken_value = JwTtoken::random();
        let serialized = serde_json::to_value(&JwTtoken_value).unwrap();
        params.push(serialized);
  
        let UserName_value = UserName::random();
        let serialized = serde_json::to_value(&UserName_value).unwrap();
        params.push(serialized);
  
        let ContainerId_value = ContainerId::random();
        let serialized = serde_json::to_value(&ContainerId_value).unwrap();
        params.push(serialized);
  
        let NodeName_value = NodeName::random();
        let serialized = serde_json::to_value(&NodeName_value).unwrap();
        params.push(serialized);
  
        let RemoveNodeData_value = RemoveNodeData::random();
        let serialized = serde_json::to_value(&RemoveNodeData_value).unwrap();
        params.push(serialized);
  
        let result = RemoveNode::random();
        let result_serialized = serde_json::to_vec(&result).unwrap();
        let result: RemoveNode = serde_json::from_slice(&result_serialized).unwrap();

        let transport = MockTransport {
            method,
            params,
            result: serde_json::to_value(&result).unwrap(),
        };

        let mut client = EnAPIOpenRPCJsonRpcAPI::new(transport);
        let received_result = client.removeNode(
          JwTtoken_value, UserName_value, ContainerId_value, NodeName_value, RemoveNodeData_value
        ).wait().unwrap();

        let result_s =
        assert_eq!(result, received_result);
    }

  
    #[test]
    #[allow(non_snake_case)]
    fn getNodeContainerInfo_test () {
        let method = "getNodeContainerInfo".into();

        let mut params = Vec::new();
  
        let JwTtoken_value = JwTtoken::random();
        let serialized = serde_json::to_value(&JwTtoken_value).unwrap();
        params.push(serialized);
  
        let ContainerId_value = ContainerId::random();
        let serialized = serde_json::to_value(&ContainerId_value).unwrap();
        params.push(serialized);
  
        let result = GetNodeContainer::random();
        let result_serialized = serde_json::to_vec(&result).unwrap();
        let result: GetNodeContainer = serde_json::from_slice(&result_serialized).unwrap();

        let transport = MockTransport {
            method,
            params,
            result: serde_json::to_value(&result).unwrap(),
        };

        let mut client = EnAPIOpenRPCJsonRpcAPI::new(transport);
        let received_result = client.getNodeContainerInfo(
          JwTtoken_value, ContainerId_value
        ).wait().unwrap();

        let result_s =
        assert_eq!(result, received_result);
    }

  
    #[test]
    #[allow(non_snake_case)]
    fn sol_compile_test () {
        let method = "sol_compile".into();

        let mut params = Vec::new();
  
        let SolVersion_value = SolVersion::random();
        let serialized = serde_json::to_value(&SolVersion_value).unwrap();
        params.push(serialized);
  
        let SolCode_value = SolCode::random();
        let serialized = serde_json::to_value(&SolCode_value).unwrap();
        params.push(serialized);
  
        let result = SolCompile::random();
        let result_serialized = serde_json::to_vec(&result).unwrap();
        let result: SolCompile = serde_json::from_slice(&result_serialized).unwrap();

        let transport = MockTransport {
            method,
            params,
            result: serde_json::to_value(&result).unwrap(),
        };

        let mut client = EnAPIOpenRPCJsonRpcAPI::new(transport);
        let received_result = client.sol_compile(
          SolVersion_value, SolCode_value
        ).wait().unwrap();

        let result_s =
        assert_eq!(result, received_result);
    }

  
    #[test]
    #[allow(non_snake_case)]
    fn ethRpcCall_test () {
        let method = "ethRpcCall".into();

        let mut params = Vec::new();
  
        let UserName_value = UserName::random();
        let serialized = serde_json::to_value(&UserName_value).unwrap();
        params.push(serialized);
  
        let NodeName_value = NodeName::random();
        let serialized = serde_json::to_value(&NodeName_value).unwrap();
        params.push(serialized);
  
        let NodeNetwork_value = NodeNetwork::random();
        let serialized = serde_json::to_value(&NodeNetwork_value).unwrap();
        params.push(serialized);
  
        let Web3CallMethod_value = Web3CallMethod::random();
        let serialized = serde_json::to_value(&Web3CallMethod_value).unwrap();
        params.push(serialized);
  
        let Web3CallParams_value = Web3CallParams::random();
        let serialized = serde_json::to_value(&Web3CallParams_value).unwrap();
        params.push(serialized);
  
        let RpcId_value = RpcId::random();
        let serialized = serde_json::to_value(&RpcId_value).unwrap();
        params.push(serialized);
  
        let result = Web3CallResult::random();
        let result_serialized = serde_json::to_vec(&result).unwrap();
        let result: Web3CallResult = serde_json::from_slice(&result_serialized).unwrap();

        let transport = MockTransport {
            method,
            params,
            result: serde_json::to_value(&result).unwrap(),
        };

        let mut client = EnAPIOpenRPCJsonRpcAPI::new(transport);
        let received_result = client.ethRpcCall(
          UserName_value, NodeName_value, NodeNetwork_value, Web3CallMethod_value, Web3CallParams_value, RpcId_value
        ).wait().unwrap();

        let result_s =
        assert_eq!(result, received_result);
    }

}
