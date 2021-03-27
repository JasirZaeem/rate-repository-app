import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryListItem from "./RepositoryListItem";
import RepositoryListHeader from "./RepositoryListHeader";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({
  repositories,
  sortBy,
  setSortBy,
  setSearchTerm,
  onEndReached
}) => {
  return (
    <FlatList
      data={repositories}
      ListHeaderComponent={
        <RepositoryListHeader
          sortBy={sortBy}
          setSortBy={setSortBy}
          setSearchTerm={setSearchTerm}
        />
      }
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryListItem {...item} />}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryListContainer;
