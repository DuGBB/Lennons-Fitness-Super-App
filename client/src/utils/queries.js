import { gql } from '@apollo/client';

export const QUERY_CLASSES = gql`
query {classes {
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
}`

export const QUERY_ACTIVITIES = gql`
query {activities {
  _id
    name
    units
    description
}
}`