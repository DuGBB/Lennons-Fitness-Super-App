const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Member {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    age: String
    joinDate: String
  }

  type Trainer {
    _id: ID!
    firstName: String
    lastName: String
    email: String
  }

  type Class {
    _id: ID!
    name: String
    location: String
    time: String
    days: String
    description: String
    trainer: Trainer
  }

  type Activity {
    _id: ID!
    name: String
    units: String
    description: String
  }

  type AuthMember {
    token: ID!
    member: Member
  }

  type AuthTrainer {
    token: ID!
    trainer: Trainer
  }

  type ClassRoster {
    _id: ID!
    class: Class
    member: Member
  }
  type Standing {
    _id: ID!
    activity: Activity
    total: String
    member: Member
  }

  type Query {
    members: [Member]
    trainers: [Trainer]
    member: Member
    trainer: Trainer
    classes: [Class]
    memberClasses: [ClassRoster]
    memberStats: [Standing]
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
    classSignup(class: String): ClassRoster
    addStats(activity: String, total: String): Standing
    trainerViewMemberStats(memberId: String): [Standing]
    trainerViewMembersStats(activityId: String): [Standing]
  }
`;

module.exports = typeDefs;
