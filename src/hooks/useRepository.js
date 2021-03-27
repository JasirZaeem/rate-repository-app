import { useQuery } from "@apollo/client";
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";

const useRepository = ({ id, reviewsFirst = 10, reviewsAfter = undefined }) => {
  const variables = {
    id,
    reviewsFirst,
    reviewsAfter,
  };
  const {
    data: { repository = {} } = {},
    loading,
    refetch,
    fetchMore,
  } = useQuery(GET_REPOSITORY_BY_ID, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        reviewsAfter: repository.reviews.pageInfo.endCursor,
      },
    });
  };

  return { repository, loading, refetch, fetchMore: handleFetchMore };
};

export default useRepository;
