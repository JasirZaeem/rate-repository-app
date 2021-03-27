import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import TextInput from "../../TextInput";
import theme from "../../../theme";

const styles = StyleSheet.create({
  searchBox: {
    margin: 12,
    padding: 8,
    backgroundColor: theme.colors.backgroundLight,
    borderRadius: 4,
    shadowColor: theme.colors.textPrimary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

const RepositoryListHeader = ({ sortBy, setSortBy, setSearchTerm }) => {
  const [searchBoxValue, setSearchBoxValue] = useState("");
  return (
    <View>
      <TextInput
        style={styles.searchBox}
        value={searchBoxValue}
        placeholder={"Search..."}
        onChangeText={(text) => {
          setSearchBoxValue(text);
          setSearchTerm(text);
        }}
      />
      <Picker
        selectedValue={sortBy}
        onValueChange={(value) => setSortBy(value)}
      >
        <Picker.Item label={"Latest repositories"} value={"latest"} />
        <Picker.Item
          label={"Highest rated repositories"}
          value={"highestRated"}
        />
        <Picker.Item
          label={"Lowest rated repositories"}
          value={"lowestRated"}
        />
      </Picker>
    </View>
  );
};

export default RepositoryListHeader;
