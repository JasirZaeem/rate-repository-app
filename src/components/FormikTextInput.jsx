import React from "react";
import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.backgroundLight,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  errorText: {
    marginTop: 4,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={styles.input}
        {...props}
      />
      {showError && (
        <Text style={styles.errorText} color={"textDanger"}>
          {meta.error}
        </Text>
      )}
    </>
  );
};

export default FormikTextInput;
