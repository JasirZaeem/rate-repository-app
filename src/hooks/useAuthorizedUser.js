import { useQuery } from "@apollo/client";

import { GET_AUTHORIZED_USER } from "../graphql/queries";

const useAuthorizedUser = ({
  includeReviews = false,
  reviewsFirst = 10,
  reviewsAfter = undefined,
} = {}) => {
  const variables = {
    includeReviews,
    reviewsFirst,
    reviewsAfter,
  };
  const { data, loading, refetch, fetchMore } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data.authorizedUser.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        reviewsAfter: data.authorizedUser.reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    authorizedUser: data?.authorizedUser,
    loading,
    refetch,
    fetchMoreReviews: handleFetchMore,
  };
};

export default useAuthorizedUser;
