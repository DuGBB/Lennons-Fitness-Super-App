import { gql } from "@apollo/client";

export const MEMBERLOGIN = gql`
  mutation memberLogin($email: String!, $password: String!) {
    memberLogin(email: $email, password: $password) {
      token
      member {
        _id
      }
    }
  }
`;

export const TRAINERLOGIN = gql`
  mutation trainerLogin($email: String!, $password: String!) {
    trainerLogin(email: $email, password: $password) {
      token
      trainer {
        _id
      }
    }
  }
`;

export const ADD_MEMBER = gql`
  mutation addMember(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $age: String!
  ) {
    addMember(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      age: $age
    ) {
      token
      member {
        _id
      }
    }
  }
`;

export const ADD_TRAINER = gql`
  mutation addTrainer(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addTrainer(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      trainer {
        _id
      }
    }
  }
`;
