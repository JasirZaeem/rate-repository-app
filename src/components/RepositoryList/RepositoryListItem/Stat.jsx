import { View, StyleSheet } from "react-native";
import Text from "../../Text";
import React from "react";

const styles = StyleSheet.create({
  stat: {
    flexGrow: 1,
    alignItems: "center",
  },
});

const Stat = ({ value, label }) => {
  value =
    Math.abs(value) > 999
      ? Math.sign(value) * (Math.abs(value) / 1000).toFixed(1) + "k"
      : Math.sign(value) * Math.abs(value);

  return (
    <View style={styles.stat} testID={"stat"}>
      <Text fontSize={"subheading"} fontWeight={"bold"}>
        {value}
      </Text>
      <Text>{label}</Text>
    </View>
  );
};

export default Stat;
