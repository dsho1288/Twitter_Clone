import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { getCorrespondingUser } from "../../utils";

const RowWithCheckBox = ({ title, completed, id }) => {
  const [checked, setChecked] = useState(completed);

  const toggleCheck = () => {
    setChecked(!checked);
  };
  const userName = getCorrespondingUser(id)?.name;

  return (
    <TouchableOpacity onPress={toggleCheck} style={styles.container}>
      <View style={styles.checkbox}>
        {checked && <Icon name="ios-checkmark" size={35} />}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.userName}>{userName}</Text>
        <Text numberOfLines={3}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: "gray",
    paddingVertical: 20,
  },
  checkbox: {
    borderWidth: 2,
    borderColor: "black",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  titleContainer: {
    width: 0,
    flex: 1,
  },
  userName: {
    fontWeight: "800",
  },
});

export default RowWithCheckBox;
