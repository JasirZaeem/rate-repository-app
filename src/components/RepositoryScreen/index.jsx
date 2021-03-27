import React from "react";
import { useParams } from "react-router-native";
import RepositoryListItem from "../RepositoryList/RepositoryListItem";
import ReviewList from "../ReviewList";
import useRepository from "../../hooks/useRepository";

const RepositoryScreen = () => {
  const { id } = useParams();

  const { repository, fetchMore } = useRepository({ id });
  const reviewNodes = repository?.reviews?.edges?.map(({ node }) => node) ?? [];

  return repository ? (
    <ReviewList
      header={<RepositoryListItem {...repository} showGithubLink={true} />}
      reviews={reviewNodes}
      onEndReached={fetchMore}
    />
  ) : null;
};

export default RepositoryScreen;
