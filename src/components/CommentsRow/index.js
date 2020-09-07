import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { extractFakeUserFromEmail } from '../../utils'

// I didn't see any correlation between the jsonplaceholder users data and 
// the comments object, so I made a fake name function that extracts from email

const CommentsRow = ({
  email,
  body
}) => (
    <View
      style={styles.container}>
      <Text style={styles.body}>
        {body}
      </Text>
      <View style={styles.userRow}>
        <Icon
          name='ios-person'
          size={10}
          color='black'
          style={{ marginRight: 7 }}
        />
        <Text style={styles.name}>
          {extractFakeUserFromEmail(email)}
        </Text>
      </View>
    </View>
  )

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "forestgreen",
    padding: 20,
  },
  name: {
    fontSize: 10,
    textTransform: 'capitalize'
  },
  body: {
    paddingVertical: 15,
    fontWeight: '600',
    fontSize: 14
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export default CommentsRow