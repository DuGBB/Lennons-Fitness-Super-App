import { gql, useQuery } from "@apollo/client";

// export const QUERY_MEMBERS = gql`
//   {
//     member {
//       firstName
//       lastName
//       email
//       age
//     }
//   }
// `;

export const QUERY_MEMBER = gql`
  {
    member {
      firstName
      lastName
      email
      age
    }
  }
`;

export const QUERY_TRAINER = gql`
  {
    trainer {
      firstName
      lastName
      email
    }
  }
`;

// export const QUERY_TRAINER = gql`
//   query trainer {
//     _id
//     firstName
//     lastName
//     email
//   }}
// `;

export const QUERY_MEMBERSTATS = gql`
  {
    memberStats {
      activity {
        _id
        name
        units
        description
      }
      member {
        _id
        firstName
        lastName
        age
        email
      }
      _id
    }
  }
`;

export const QUERY_CLASSES = gql`
  query {
    classes {
      _id
      name
      location
      time
      days
      description
      trainer {
        firstName
        lastName
        email
      }
    }
  }
`;

export const QUERY_MEMBERCLASSES = gql`
  {
    memberClasses {
      class {
        _id
        name
        time
        days
        description
      }
      member {
        _id
        firstName
        lastName
        age
        email
      }
      _id
    }
  }
`;

// export const QUERY_MEMBERS = gql`
//   query members(
//     $firstName: String
//     $lastName: String
//     $email: String
//     $age: String
//   ) {
//     members(
//       firstName: $firstName
//       lastName: $lastName
//       email: $email
//       password: $password
//       age: $age
//     ) {
//       _id
//       firstName
//       lastName
//       email
//       age
//       createdAt
//     }
//   }
// `;

// export const QUERY_MEMBER = gql`
//   query member($id: ID!) {
//     member(_id: $id) {
//       _id
//       firstName
//       lastName
//       email
//       password
//       age
//       createdAt
//     }
//   }
// `;

// export const QUERY_STANDINGS = gql`
//   query memberStats {
//       activity {
//         _id
//         name
//         units
//         description
//       }
//       member {
//         _id
//         firstName
//         lastName
//         age
//         email
//       }
//       _id
//     }
//   }
// `;
