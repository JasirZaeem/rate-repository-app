import React from "react";
import { useHistory } from "react-router-native";
import useCreateReview from "../../hooks/useCreateReview";
import CreateReviewContainer from "./CreateReviewContainer";

const CreateReviewScreen = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async ({ rating, ...remainingReview }) => {
    try {
      const postedReview = await createReview({
        rating: parseInt(rating),
        ...remainingReview,
      });
      history.push(`/repository/${postedReview.repositoryId}`);
    } catch (e) {
      console.log({ e }, "Review failed");
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReviewScreen;
