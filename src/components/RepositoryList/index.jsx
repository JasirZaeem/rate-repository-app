import React from "react";
import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const repositoryNodes = repositories?.edges?.map(({ node }) => node) ?? [];
  return <RepositoryListContainer repositories={repositoryNodes} />;
};

export default RepositoryList;
