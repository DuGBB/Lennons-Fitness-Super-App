const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Member {
    firstName: String
    lastName: String
    email: String
    age: String
  }

  type Trainer {
    _id: ID!
    firstName: String
    lastName: String
    email: String
  }

  type AuthMember {
    token: ID!
    member: Member
  }

  type AuthTrainer {
    token: ID!
    trainer: Trainer
  }

  type Query {
    members: [Member]
    trainers: [Trainer]
    member: Member
    trainer: Trainer
  }

  type Mutation {
    addMember(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      age: String!
    ): AuthMember
    addTrainer(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): AuthTrainer
    memberLogin(email: String!, password: String!): AuthMember
    trainerLogin(email: String!, password: String!): AuthTrainer
    updateMember(
      firstName: String
      lastName: String
      email: String
      password: String
      age: String
    ): Member
    updateTrainer(
      firstName: String
      lastName: String
      email: String
      password: String
    ): Trainer
  }
`;

module.exports = typeDefs;
