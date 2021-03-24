import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import * as yup from "yup";
import { Formik } from "formik";
import SignInForm from "./SignInForm";
import React from "react";

const styles = StyleSheet.create({
  submit: {
    borderRadius: 4,
    marginTop: 8,
    padding: 16,
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
  form: {
    backgroundColor: theme.colors.backgroundLight,
    padding: 16,
  },
});

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
