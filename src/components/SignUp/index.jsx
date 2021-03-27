import React from "react";
import { useHistory } from "react-router-native";
import SignUpContainer from "./SignUpContainer";
import useSignUp from "../../hooks/useSignUp";
import useSignIn from "../../hooks/useSignIn";

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async ({ username, password }) => {
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      history.push("/");
    } catch (e) {
      console.log({ e }, "Sign up failed");
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
