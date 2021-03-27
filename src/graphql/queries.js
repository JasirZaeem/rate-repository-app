import { gql } from "@apollo/client";

import { PAGE_INFO, REPOSITORY_DETAILS, REVIEW_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $after: String
    $first: Int
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      after: $after
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...repositoryDetails
        }
        cursor
      }
      pageInfo {
        ...pageInfo
      }
      totalCount
    }
  }
  ${REPOSITORY_DETAILS}
  ${PAGE_INFO}
`;

export const GET_REPOSITORY_BY_ID = gql`
  query getRepository($id: ID!, $reviewsFirst: Int, $reviewsAfter: String) {
    repository(id: $id) {
      ...repositoryDetails
      reviews(first: $reviewsFirst, after: $reviewsAfter) {
        edges {
          node {
            ...reviewDetails
          }
        }
        pageInfo {
          ...pageInfo
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
  ${PAGE_INFO}
`;

export const GET_AUTHORIZED_USER = gql`
  query getAuthorizedUser(
    $includeReviews: Boolean = false
    $reviewsFirst: Int
    $reviewsAfter: String
  ) {
    authorizedUser {
      id
      username
      reviews(first: $reviewsFirst, after: $reviewsAfter)
        @include(if: $includeReviews) {
        edges {
          node {
            ...reviewDetails
          }
        }
        pageInfo {
          ...pageInfo
        }
      }
    }
  }
  ${REVIEW_DETAILS}
  ${PAGE_INFO}
`;
