import { Pressable, StyleSheet, View } from "react-native";
import FormikTextInput from "../FormikTextInput";
import Text from "../Text";
import React from "react";
import theme from "../../theme";

const styles = StyleSheet.create({
  form: {
    backgroundColor: theme.colors.backgroundLight,
    padding: 16,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        testID="usernameField"
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        testID="passwordField"
        secureTextEntry
      />
      <Pressable onPress={onSubmit} style={styles.submit} testID="submitButton">
        <Text fontSize={"subheading"} color={"textLight"}>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
