import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { fetchComments, receiveComment, deletePost } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const PostsRow = ({ user, title = "", body = "", navigatation, id }) => {
  const comments = useSelector((state) => state.comments.id);
  const dispatch = useDispatch();
  const getComments = () => dispatch(fetchComments(id));
  const changeComments = () => dispatch(receiveComment(comments, id));
  const onDeletePost = () => dispatch(deletePost(id));
  const pressComment = () => {
    navigatation.navigate("Comments");

    if (!comments) getComments();
    else changeComments();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDeletePost} style={styles.deleteButton}>
        <Text style={styles.deleteText}>delete post</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <View style={styles.userDetails}>
        <View style={styles.userRow}>
          {user?.image ? (
            <Image source={{ uri: user.image }} style={styles.image} />
          ) : (
            <Icon
              name="ios-person"
              size={10}
              color="black"
              style={{ marginRight: 7 }}
            />
          )}
          <Text style={styles.name}>{user?.name}</Text>
        </View>
        <TouchableOpacity onPress={pressComment}>
          <Text style={styles.comments}>See Comments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.2,
    borderBottomColor: "gray",
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
  },
  name: {
    fontSize: 10,
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 7,
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    paddingVertical: 15,
  },
  comments: {
    color: "blue",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButton: {
    alignSelf: "flex-end",
    padding: 5,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 6,
  },
  deleteText: {
    color: "red",
  },
});

export default PostsRow;
