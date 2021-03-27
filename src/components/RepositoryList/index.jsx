import React, { useState } from "react";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";
import useDebouncedState from "../../hooks/useDebouncedState";

const SORTING = {
  latest: { orderBy: "CREATED_AT", orderDirection: "DESC" },
  highestRated: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
  lowestRated: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" },
};

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState("latest");
  const [searchTerm, setDebouncedSearchTerm] = useDebouncedState("", 300);

  const { repositories, fetchMore } = useRepositories({
    ...SORTING[sortBy],
    first: 8,
    searchKeyword: searchTerm || undefined,
  });
  const repositoryNodes = repositories?.edges?.map(({ node }) => node) ?? [];
  return (
    <RepositoryListContainer
      repositories={repositoryNodes}
      sortBy={sortBy}
      setSortBy={setSortBy}
      searchTerm={searchTerm}
      setSearchTerm={setDebouncedSearchTerm}
      onEndReached={fetchMore}
    />
  );
};

export default RepositoryList;
