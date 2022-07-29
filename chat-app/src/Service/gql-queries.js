import { gql } from "@apollo/client"

export const GET_ALL_MESSAGES = gql`
  query{
    getAllMessages {
      id
      message
      createdAt
      users{
        id
        name
      }
    }
  } 
`

export const ADD_USER = gql`
  mutation AddUser($user: String!, $id: Float!) {
    addUser(name:$user, id: $id){
      id  
      name
    } 
  }
`

export const ADD_MESSAGE = gql`
  mutation sendMessage($message: String!, $userId: Float!) {
    sendMessage(message:$message, userId: $userId){
      message
    } 
  }
`

export const MESSAGE_ADDED_SUBSCRIPTION = gql`
  subscription {
    messageAdded {
      id
      message
      createdAt
      users{
        id
        name
      }
    }
  }
`