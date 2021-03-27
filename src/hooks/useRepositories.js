import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({
  after = undefined,
  first = 10,
  orderBy = "CREATED_AT",
  orderDirection = "ASC",
  searchKeyword = undefined,
}) => {
  const variables = { after, first, orderDirection, orderBy, searchKeyword };
  const {
    data: { repositories = {} } = {},
    loading,
    refetch,
    fetchMore,
  } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: repositories.pageInfo.endCursor,
      },
    });
  };

  return { repositories, loading, refetch, fetchMore: handleFetchMore };
};

export default useRepositories;
