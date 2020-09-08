import React, { useEffect } from "react";
import { SafeAreaView, FlatList, StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CommentsRow from "../../components/CommentsRow";

const Comments = () => {
  const comments = useSelector((state) => state.activeComments);

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={comments}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => {
          return <CommentsRow {...item} />;
        }}
        keyExtractor={(item) => `commentsList-${item.id}`}
      />
    </SafeAreaView>
  );
};

export default Comments;

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  separator: {
    marginVertical: 4,
  },
});
