import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";
import Stat from "./Stat";

const styles = StyleSheet.create({
  repoListItem: {
    marginBottom: 8,
    padding: 16,
    backgroundColor: theme.colors.backgroundLight,
  },
  avatar: {
    borderRadius: 4,
    width: 64,
    height: 64,
  },
  summary: {
    flexDirection: "row",
  },
  summaryText: {
    paddingLeft: 16,
    paddingRight: 16,
    alignSelf: "flex-start",
    width: 0,
    flexGrow: 1,
  },
  stats: {
    marginTop: 12,
    flexDirection: "row",
  },
  language: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    padding: 8,
    marginTop: 12,
  },
});

const RepositoryListItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  return (
    <View style={styles.repoListItem}>
      <View style={styles.summary}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
        </View>

        <View style={styles.summaryText}>
          <Text fontSize={"subheading"} fontWeight={"bold"}>
            {fullName}
          </Text>
          <Text>{description}</Text>
          <View style={styles.language}>
            <Text color={"textLight"}>{language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.stats}>
        <Stat value={stargazersCount} label={"Stars"} />
        <Stat value={forksCount} label={"Forks"} />
        <Stat value={reviewCount} label={"Reviews"} />
        <Stat value={ratingAverage} label={"Rating"} />
      </View>
    </View>
  );
};

export default RepositoryListItem;
