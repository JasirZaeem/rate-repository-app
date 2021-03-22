import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../../theme";

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text={"Repositories"} linkTo={"/"} />
        <AppBarTab text={"Sign In"} linkTo={"/signIn"} />
        {/*<AppBarTab text={"Create a review"}/>*/}
      </ScrollView>
    </View>
  );
};

export default AppBar;
