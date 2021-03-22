import React from "react";
import { StyleSheet } from "react-native";
import Main from "./src/components/Main";
import theme from "./src/theme";
import { NativeRouter } from "react-router-native";
import createApolloClient from "./src/utils/apolloClient";
import {ApolloProvider} from "@apollo/client";

const apolloClient = createApolloClient();

const App = () => {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
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
