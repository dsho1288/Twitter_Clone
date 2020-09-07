import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Loading