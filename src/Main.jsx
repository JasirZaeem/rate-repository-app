import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";

import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/AppBar";
import theme from "./theme";
import SignIn from "./components/SignIn";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.backgroundGrey,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path={"/signIn"}>
          <SignIn />
        </Route>
        <Route path={"/"} exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
