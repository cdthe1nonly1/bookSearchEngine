const { User } = require("../models");
const bookSchema = require("../models/Book");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  // This querry should pull back the user with bookID
  Query: {
    // users: async (username) => {
    //   return User.find(username).populate("BookID");
    // },
    me: async (parent, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  // one for each listed in the tyedefs
  Mutation: {
    // create a user
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return token, user;
    },
    //login functionality
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }
      const corretPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);

      return { token, user };
    },
    // add a book to user
    // Notes from Charles I wrote this the best I could, but I struggled with this and not confident it is correct.
    saveBook: async (
      parent,
      { author, description, bookID, image, title },
      context
    ) => {
      if (context.user) {
        const savedBook = await Book.create({
          author,
          description,
          bookID,
          image,
          title,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { book: bookID } }
        );
        return book;
      }
    },
    // Notes from Charles I wrote this the best I could, but I struggled with this and not confident it is correct.
    deleteBook: async (parent, { bookID }, context) => {
      if (context.user) {
        const thought = await Book.findOneAndDelete({
          _id: bookID,
        });
        await User.findOneAndUpdate(
          { _id: context.user.id },
          { $pull: { bookID } }
        );
        return user;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
