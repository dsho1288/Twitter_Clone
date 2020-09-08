import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { postNew } from "../../redux/actions";

const AddPost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();
  const createPost = () => {
    Keyboard.dismiss();
    dispatch(postNew(title, body));
    props.navigation.pop();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
        <Text>Post</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setBody(text)}
          value={body}
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.button} onPress={createPost}>
          <Text>Add Post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 15,
  },
  container: {
    padding: 8,
  },
  button: {
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
  },
});
