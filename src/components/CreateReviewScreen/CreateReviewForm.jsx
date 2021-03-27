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

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="text" placeholder="Review" multiLine />
      <Pressable onPress={onSubmit} style={styles.submit} testID="submitButton">
        <Text fontSize={"subheading"} color={"textLight"}>
          Create Review
        </Text>
      </Pressable>
    </View>
  );
};

export default CreateReviewForm;
