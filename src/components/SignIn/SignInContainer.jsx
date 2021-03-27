import { View } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import SignInForm from "./SignInForm";
import React from "react";

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const SignInContainer = ({ onSubmit }) => (
  <View>
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  </View>
);

export default SignInContainer;
