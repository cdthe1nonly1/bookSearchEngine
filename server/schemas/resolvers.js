const { User } = require('../models');

const resolvers = {
// This querry should pull back the user with bookID
  Query: {
    users: async ( username ) => {
      return User.find( username ).populate('BookID');
    },
  },
    // one for each listed in the tyedefs
  Mutation: {
   
   // create a user
    createUser: async (parent, {username, email, password}) => {
      const user = await User.create({username, email, password});
      const token = signToken(user);
      return(token, user);
    },
    //login functionality
    Login: async (parent,{email, password}) => {
      const user = await User.findOne({email});
      if (!user) {
        throw new AuthenticationError('No ')
      }
    }
  }

};

module.exports = resolvers;
