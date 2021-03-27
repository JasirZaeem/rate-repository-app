import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const createReview = async (reviewData) => {
    const res = await mutate({ variables: reviewData });
    return res.data.createReview;
  };

  return [createReview, result];
};

export default useCreateReview;
