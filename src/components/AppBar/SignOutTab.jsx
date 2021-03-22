import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "../Text";
import useAuthStorage from "../../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
  tab: {
    padding: 8,
  },
});

const SignOutTab = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const history = useHistory();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push("/");
  };

  return (
    <View style={styles.tab}>
      <TouchableOpacity activeOpacity={0.5} onPress={signOut}>
        <Text color={"textLight"} fontSize={"subheading"}>
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignOutTab;
