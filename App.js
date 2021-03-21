import React from "react";
import { StyleSheet } from "react-native";
import Main from "./src/Main";
import theme from "./src/theme";
import { NativeRouter } from "react-router-native";

const App = () => {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundLight,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
