import React from "react";
import useSignIn from "../../hooks/useSignIn";
import { useHistory } from "react-router-native";
import SignInContainer from "./SignInContainer";

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async ({ username, password }) => {
    try {
      await signIn({ username, password });
      history.push("/");
    } catch (e) {
      console.log(e, "not logged in");
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
