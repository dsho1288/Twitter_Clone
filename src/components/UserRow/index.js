import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

// the user row will display an icon if ui faces rate limit has been hit


const UserRow = ({
  name = '',
  email = '',
  phone = '',
  company,
  image
}) => {
  const callUser = () => Linking.openURL(`tel:${phone}`)
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        {
          image ?
            <Image source={{ uri: image }} style={styles.image} /> :
            <Icon
              name='ios-person'
              size={30}
              color='black'
              style={styles.image}
            />
        }

        <View>
          <Text style={styles.name}>
            {name}
          </Text>
          <View>
            <Text>
              {email}
            </Text>
            <Text>
              {phone}
            </Text>
            <Text>
              {company ?.name}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={callUser}>
        <Icon
          name='ios-call'
          size={24}
          color='green'
        />
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: "gray",
    paddingVertical: 20,
  },
  name: {
    fontSize: 20,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 7
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  }
})

export default UserRow