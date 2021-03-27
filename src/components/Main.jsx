import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";

import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";
import SignIn from "./SignIn";
import RepositoryScreen from "./RepositoryScreen";
import CreateReviewScreen from "./CreateReviewScreen";
import SignUp from "./SignUp";
import MyReviews from "./MyReviews";

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
        <Route path={"/"} exact>
          <RepositoryList />
        </Route>
        <Route path={"/signIn"}>
          <SignIn />
        </Route>
        <Route path={"/signUp"}>
          <SignUp />
        </Route>
        <Route path={"/myReviews"}>
          <MyReviews />
        </Route>
        <Route path={"/createReview"}>
          <CreateReviewScreen />
        </Route>
        <Route path={"/repository/:id"}>
          <RepositoryScreen />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
