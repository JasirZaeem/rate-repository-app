import React from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import Text from "../Text";
import theme from "../../theme";
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
  reviewListItem: {
    marginBottom: 8,
    padding: 16,
    backgroundColor: theme.colors.backgroundLight,
  },
  rating: {
    borderRadius: 32,
    width: 64,
    height: 64,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  review: {
    flexDirection: "row",
  },
  reviewText: {
    paddingLeft: 16,
    paddingRight: 16,
    alignSelf: "flex-start",
    width: 0,
    flexGrow: 1,
  },
  actionContainer: {
    marginTop: 12,
    flexDirection: "row",
  },
  action: {
    alignSelf: "flex-start",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  viewAction: {
    backgroundColor: theme.colors.primary,
  },
  deleteAction: {
    backgroundColor: theme.colors.textDanger,
  },
});

const formattedDate = (timestamp) =>
  timestamp.slice(0, 10).split("-").reverse().join(".");

const ReviewListItem = ({
  id,
  text,
  rating,
  createdAt,
  user: { username } = {},
  repository: { fullName } = {},
  showActions,
  repositoryId = undefined,
  onDelete = undefined,
}) => {
  const history = useHistory();
  return (
    <View style={styles.reviewListItem}>
      <View style={styles.review}>
        <View>
          <View style={styles.rating}>
            <Text color={"primary"} fontSize={"subheading"} fontWeight={"bold"}>
              {rating}
            </Text>
          </View>
        </View>

        <View style={styles.reviewText}>
          <Text fontSize={"subheading"} fontWeight={"bold"}>
            {showActions ? fullName : username}
          </Text>
          <Text>{formattedDate(createdAt)}</Text>
          <Text style={{ marginTop: 8 }}>{text}</Text>
        </View>
      </View>

      {showActions ? (
        <View style={styles.actionContainer}>
          <Pressable
            onPress={() => history.push(`/repository/${repositoryId}`)}
            style={[styles.action, styles.viewAction]}
          >
            <Text fontSize={"subheading"} color={"textLight"}>
              View Repository
            </Text>
          </Pressable>
          <Pressable
            onPress={() =>
              Alert.alert(
                "Delete Review",
                "Are you sure you want to delete this review ?",
                [
                  {
                    text: "CANCEL",
                    onPress: () => {},
                  },
                  {
                    text: "DELETE",
                    onPress: () => onDelete(id),
                  },
                ]
              )
            }
            style={[styles.action, styles.deleteAction]}
          >
            <Text fontSize={"subheading"} color={"textLight"}>
              Delete Review
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

export default ReviewListItem;
