import { Pressable, StyleSheet, View } from "react-native";
import FormikTextInput from "../FormikTextInput";
import Text from "../Text";
import React from "react";
import theme from "../../theme";

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

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput
        name="confirmPassword"
        placeholder="Confirm password"
        secureTextEntry
      />
      <Pressable onPress={onSubmit} style={styles.submit} testID="submitButton">
        <Text fontSize={"subheading"} color={"textLight"}>
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
