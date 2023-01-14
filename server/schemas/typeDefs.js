const { gql } = require('apollo-server-express');
//added in the types based off models in the client folder
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks [Books]
  }

  type Book {
    authors: Sting
    description: Sting
    bookID: String
    image: String
    link: String
    title: String
  }

  type Mutation {
    addUser(username: String!): User
    addBook(userID: ID!, book: String!): User
    removeUser(userId: ID!): User
    removeSkill(userId: ID!, book: String!): User
  }
`;

module.exports = typeDefs;
