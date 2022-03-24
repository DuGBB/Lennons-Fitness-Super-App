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

export const UPDATE_CLASS = gql`
  mutation updateClass($id: ID!, $building: String!) {
    updateClass(id: $id, building: $building) {
      name
      building
    }
  }
`;

export const CLASS_SIGNUP = gql`
  mutation classSignup($class: String!) {
    classSignup(class: $class) {
      member {
        _id
        firstName
        lastName
        email
      }
      class {
        _id
        name
        time
      }
    }
  }
`;

export const ADD_STATS = gql`
  mutation addStats($activity: String!, $total: String!) {
    addStats(activity: $activity, total: $total) {
      member {
        _id
        firstName
        lastName
        email
      }
      activity {
        _id
        name
        description
      }
      total
    }
  }
`;

export const TRAINERVIEW_MEMBER_STATS = gql`
  mutation trainerViewMembersStats($activityId: String!) {
    trainerViewMembersStats(activityId: $activityId) {
      member {
        _id
        firstName
        lastName
        email
        age
      }
      _id
      total
      activity {
        _id
        name
        units
        description
      }
    }
  }
`;
