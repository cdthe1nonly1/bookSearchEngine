const { User } = require('../models');

const resolvers = {
  // Query: {
  //   users: async () => {
  //     return User.find();
  //   },

  //   user: async (parent, { userId }) => {
  //     return User.findOne({ _id: userId });
  //   },
  // },

  Mutation: {
    addUser: async (parent, { name }) => {
      return User.create({ name });
    },
    addBook: async (parent, { userId, book }) => {
      return Profile.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { book: book },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeProfile: async (parent, { userId }) => {
      return Profile.findOneAndDelete({ _id: userId });
    },
    removeSkill: async (parent, { userId, book }) => {
      return Profile.findOneAndUpdate(
        { _id: userId },
        { $pull: { book: book } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
