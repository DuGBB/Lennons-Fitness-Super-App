const { AuthenticationError } = require("apollo-server-express");
const { Member, Trainer } = require("../models");
const { signToken } = require("../utils/auth");
//const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    members: async (parent, args, context) => {
      if (context.member) {
        const member = await Member.findById(context.member._id).populate({
          //   path: "orders.products",
          //   populate: "category",
        });
        return member;
      }

      throw new AuthenticationError("Not logged in");
    },
    trainers: async (parent, args, context) => {
      if (context.trainer) {
        const trainer = await Trainer.findById(context.trainer._id).populate({
          //   path: "orders.products",
          //   populate: "category",
        });
        return trainer;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    addMember: async (parent, args) => {
      const member = await Member.create(args);
      const token = signToken(member);

      return { token, member };
    },
    addTrainer: async (parent, args) => {
      const trainer = await Trainer.create(args);
      const token = signToken(trainer);

      return { token, trainer };
    },
    updateMember: async (parent, args, context) => {
      if (context.member) {
        return await Member.findByIdAndUpdate(context.member._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    updateTrainer: async (parent, args, context) => {
      if (context.trainer) {
        return await Trainer.findByIdAndUpdate(context.trainer._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    memberLogin: async (parent, { email, password }) => {
      const member = await Member.findOne({ email });

      if (!member) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await member.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(member);

      return { token, member };
    },
    trainerLogin: async (parent, { email, password }) => {
      const trainer = await Trainer.findOne({ email });

      if (!trainer) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await trainer.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(trainer);

      return { token, trainer };
    },
  },
};
module.exports = resolvers;
