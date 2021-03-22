import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryListItem from "./RepositoryListItem";
import useRepositories from "../../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const fetchRepositories = async () => {
  const response = await fetch("http://192.168.100.18:5000/api/repositories");
  const json = await response.json();

  console.log(json);
  return json;
};

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const repositoryNodes = repositories?.edges.map(({ node }) => node) ?? [];
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryListItem {...item} />}
    />
  );
};

export default RepositoryList;
