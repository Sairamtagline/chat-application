import { gql } from "@apollo/client"

export const GET_PROJECT_INVITESHOME = gql`
  query getaccessdetail($documentId: String!, $userId: String!) {
    documentAccessGet(user_id: $userId, document_id: $documentId) {
      document_id
      user_id
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

export const SESSION_UPDATE_SUBSCRIPTION = gql`
  subscription SubmissionUpdate($session_id: String) {
    sessionUpdated(session_id: $session_id) {
      id
      xfdf
    }
  }
`
