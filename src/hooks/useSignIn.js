import { useApolloClient, useMutation } from "@apollo/client";
import { AUTHORIZE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHORIZE);
  const apolloClient = useApolloClient();
  const signIn = async ({ username, password }) => {
    const {
      data: {
        authorize: { accessToken },
      },
    } = await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(accessToken);
    await apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;
