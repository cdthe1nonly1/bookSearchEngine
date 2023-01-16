import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
`;

export const DELETE_BOOK = gql`
    mutation deleteBook($bookId: ID!) {
        deleteBook(bookId: $bookId) {
            savedBooks {
                authors
                bookId
                description
                image
                link
                title
            }
        }
    }
`;
