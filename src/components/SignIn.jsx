import React from "react";
import Text from "./Text";
import { Pressable, View, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";
import * as yup from "yup";

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

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit} style={styles.submit}>
        <Text fontSize={"subheading"} color={"textLight"}>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const SignIn = () => {
  return (
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
};

export default SignIn;
