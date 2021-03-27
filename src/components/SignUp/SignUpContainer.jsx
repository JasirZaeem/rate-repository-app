import { View } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import React from "react";
import SignUpForm from "./SignUpForm";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(1, "Username must be at least 1 character long")
    .max(30, "Username cannot be longer than 30 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 character long")
    .max(30, "Password cannot be longer than 30 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf(
      [yup.ref("password"), null],
      "Password and confirm password must match"
    ),
});

const SignUpContainer = ({ onSubmit }) => (
  <View>
    <Formik
      initialValues={{
        username: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  </View>
);

export default SignUpContainer;
