import { useMutation } from "@apollo/client";
import { CREATE_USER} from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const signUp = async (userData) => {
    const res = await mutate({ variables: userData });
    return res.data.createUser;
  };

  return [signUp, result];
};

export default useSignUp;
