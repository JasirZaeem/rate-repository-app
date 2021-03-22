import Text from "../Text";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  tab: {
    padding: 8,
  },
});
const AppBarTab = ({ text, linkTo }) => {
  return (
    <View style={styles.tab}>
      <Link to={linkTo} component={TouchableOpacity} activeOpacity={0.5}>
        <Text color={"textLight"} fontSize={"subheading"}>
          {text}
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
