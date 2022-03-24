import { gql } from "@apollo/client";

export const QUERY_CLASSES = gql`
  query classList($email: String) {
    classList(email: $email) {
      _id
      name
      location
      time
      days
      description
      trainer {
        _id
        firstName
        lastName
        email
        password
      }
    }
  }
`;
