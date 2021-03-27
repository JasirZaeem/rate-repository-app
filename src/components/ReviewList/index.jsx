import React from "react";
import { FlatList, View } from "react-native";
import ReviewListItem from "./ReviewListItem";

const ReviewList = ({
  header = undefined,
  reviews,
  onEndReached,
  showReviewActions,
  onDelete,
}) => {
  return (
    <FlatList
      style={{ flexGrow: 1 }}
      data={reviews}
      ListHeaderComponent={header ? () => header : null}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item }) => (
        <ReviewListItem
          {...item}
          showActions={showReviewActions}
          onDelete={onDelete}
        />
      )}
      onEndReached={onEndReached}
    />
  );
};

export default ReviewList;
