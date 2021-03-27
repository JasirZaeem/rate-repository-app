import { gql } from "@apollo/client";
import { REVIEW_DETAILS } from "./fragments";

export const AUTHORIZE = gql`
  mutation authorize($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      createdAt
      id
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview(
    $text: String!
    $rating: Int!
    $repositoryName: String!
    $ownerName: String!
  ) {
    createReview(
      review: {
        text: $text
        rating: $rating
        repositoryName: $repositoryName
        ownerName: $ownerName
      }
    ) {
      ...reviewDetails
    }
  }
  ${REVIEW_DETAILS}
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`;
