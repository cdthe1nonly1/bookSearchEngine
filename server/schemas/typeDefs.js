const { gql } = require('apollo-server-express');
//added in the types based off models in the client folder
// added notes in API to where this came from.
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks [Books]
  }

  type Book {
    authors: String
    description: String
    bookID: String
    image: String
    link: String
    title: String
  }
    type Auth {
    token: ID!
    user: User
  }

 type Query {
    me: User
  }


  type Mutation {

    createUser(username: String!, email: String!, password: String!): User
    saveBook(author: String!, description: String!, bookID: Sting!, image: String!, title: String!): User
    deleteBook(userId: ID!, bookId: String!): User
    loginUser(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
