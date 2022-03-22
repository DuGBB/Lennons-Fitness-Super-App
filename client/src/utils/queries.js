import { gql } from '@apollo/client';

export const QUERY_MEMBER = gql`
  query member($firstname: String) {
    email
    age
  }
`;