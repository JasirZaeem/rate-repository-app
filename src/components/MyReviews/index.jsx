import React from "react";
import useAuthorizedUser from "../../hooks/useAuthorizedUser";
import ReviewList from "../ReviewList";
import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../../graphql/mutations";

const MyReviews = () => {
  const { authorizedUser, fetchMoreReviews, refetch } = useAuthorizedUser({
    includeReviews: true,
  });

  const [deleteReview] = useMutation(DELETE_REVIEW);

  const reviewNodes =
    authorizedUser?.reviews?.edges?.map(({ node }) => node) ?? [];

  const deleteHandler = async (id) => {
    await deleteReview({ variables: { id } });
    await refetch();
  };
  return (
    <ReviewList
      reviews={reviewNodes}
      onEndReached={fetchMoreReviews}
      showReviewActions={true}
      onDelete={deleteHandler}
    />
  );
};

export default MyReviews;
