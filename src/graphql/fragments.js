import { gql } from "@apollo/client";

export const REPOSITORY_DETAILS = gql`
  fragment repositoryDetails on Repository {
    id
    fullName
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
    url
  }
`;

export const REVIEW_DETAILS = gql`
  fragment reviewDetails on Review {
    createdAt
    id
    rating
    text
    repositoryId
    user {
      id
      username
    }
    repository {
      fullName
    }
  }
`;

export const PAGE_INFO = gql`
  fragment pageInfo on PageInfo {
    startCursor
    endCursor
    hasPreviousPage
    hasNextPage
  }
`;
