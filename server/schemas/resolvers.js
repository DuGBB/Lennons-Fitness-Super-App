const { AuthenticationError } = require("apollo-server-express");
const {
  Member,
  Trainer,
  Class,
  ClassRoster,
  Activity,
  Standing,
} = require("../models");
const { signToken } = require("../utils/auth");
//const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    member: async (parent, args, context) => {
      if (context.user) {
        const member = await Member.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return member;
      }

      throw new AuthenticationError("Not logged in");
    },
    members: async (parent, args, context) => {
      return Member.find();

      throw new AuthenticationError("Not logged in");
    },

    trainer: async (parent, args, context) => {
      if (context.user) {
        const trainer = await Trainer.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return trainer;
      }

      throw new AuthenticationError("Not logged in");
    },

    classes: async (parent) => {
      return Class.find({}).sort({ name: -1 });
    },
    memberClasses: async (parent, args, context) => {
      if (context.user) {
        return ClassRoster.find({
          member: context.user._id,
        })
          .populate("member")
          .populate("class")
          .sort({ time: -1 });
      }

      throw new AuthenticationError("Not logged in");
    },
    memberStats: async (parent, args, context) => {
      if (context.user) {
        return Standing.find({
          member: context.user._id,
        })
          .populate("member")
          .populate("activity")
          .sort({ name: -1 });
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
      //heroku stuff
      return { token, trainer };
    },

    classSignup: async (parent, args, context) => {
      if (context.user) {
        const signupItem = await Class.findById(args["class"]);
        const member = await Member.findById(context.user._id);
        const classSignup = await ClassRoster.create({
          class: signupItem,
          member: member,
        });

        return classSignup;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    addStats: async (parent, args, context) => {
      if (context.user) {
        const statItem = await Activity.findById(args["activity"]);
        const member = await Member.findById(context.user._id);
        const newStat = await Standing.create({
          total: args["total"],
          member: member,
          activity: statItem,
        });

        return newStat;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    trainerViewMemberStats: async (parent, args, context) => {
      if (context.user) {
        const member = await Member.findById(args["memberId"]);
        const memberStats = await Standing.find({ member: member })

          .populate("member")
          .populate("activity")
          .sort({ name: -1, statDate: -1 });
        return memberStats;
      }

      throw new AuthenticationError("Not logged in");
    },
    trainerViewMembersStats: async (parent, args, context) => {
      if (context.user) {
        const activity = await Activity.findById(args["activityId"]);
        const activityStats = await Standing.find({ activity: activity })

          .populate("member")
          .populate("activity")
          .sort({ name: -1, statDate: -1 });
        return activityStats;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
