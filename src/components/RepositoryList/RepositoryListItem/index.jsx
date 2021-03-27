import React from "react";
import { View, StyleSheet, Image, Pressable, Linking } from "react-native";
import Text from "../../Text";
import theme from "../../../theme";
import Stat from "./Stat";
import { useHistory } from "react-router-native";

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
  githubLink: {
    width: "100%",
    alignItems: "center",
    padding: 12,
  },
});

const RepositoryListItem = ({
  id,
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
  url,
  showGithubLink = false,
}) => {
  const history = useHistory();

  return (
    <View style={styles.repoListItem} testID={"repositoryListItem"}>
      <Pressable onPress={() => history.push(`/repository/${id}`)}>
        <View style={styles.summary}>
          <View>
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

        <View style={styles.stats} testID={"stats"}>
          <Stat value={stargazersCount} label={"Stars"} />
          <Stat value={forksCount} label={"Forks"} />
          <Stat value={reviewCount} label={"Reviews"} />
          <Stat value={ratingAverage} label={"Rating"} />
        </View>
      </Pressable>
      {showGithubLink ? (
        <Pressable
          onPress={() => Linking.openURL(url)}
          style={[styles.language, styles.githubLink]}
        >
          <Text fontSize={"subheading"} color={"textLight"}>
            Open in Github
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
};

export default RepositoryListItem;
