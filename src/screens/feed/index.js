import React, { useEffect } from 'react'
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../../redux/actions'
import PostsRow from '../../components/PostsRow'

const Feed = (props) => {
  const posts = useSelector(state => state.posts)
  const users = useSelector(state => state.users)

  const dispatch = useDispatch()
  const getPosts = () => dispatch(fetchPosts())

  useEffect(() => {
    getPosts()
  }, [users])

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.addPost}
        onPress={() => props.navigation.navigate('AddPost')} >
        <Text style={styles.postText}>
          Add New Post
        </Text>
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={posts}
        renderItem={({ item }) => {

          return (
            <PostsRow navigatation={props.navigation} {...item} />
          )
        }}
        keyExtractor={item => `postsList-${item.id}`}
      />
    </SafeAreaView>
  )

}

export default Feed

const styles = StyleSheet.create({
  listContainer: {
    padding: 10
  },
  addPost: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    marginTop: 15,
    padding: 5,
    borderRadius: 3
  },
  postText: {
    textAlign: 'center'
  }
})