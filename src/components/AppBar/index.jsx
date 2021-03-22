import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../../theme";
import useAuthorizedUser from "../../hooks/useAuthorizedUser";
import SignOutTab from "./SignOutTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight / 2,
    paddingLeft: 16,
    backgroundColor: theme.colors.backgroundDark,
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { authorizedUser } = useAuthorizedUser();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text={"Repositories"} linkTo={"/"} />
        {authorizedUser ? (
          <SignOutTab />
        ) : (
          <AppBarTab text={"Sign In"} linkTo={"/signIn"} />
        )}

        {/*<AppBarTab text={"Create a review"}/>*/}
      </ScrollView>
    </View>
  );
};

export default AppBar;
