import React, { useEffect } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setUsers as setUsersAction } from '../../redux/actions'
import UserRow from '../../components/UserRow'
import Loading from '../../components/Loading'

const Users = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  const setUsers = data => dispatch(setUsersAction(data))

  useEffect(() => {
    async function fetchUsers() {

      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

      setUsers(data)
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    // fetching faces in different effect so as not to block the original users call
    // and then mapping the faces to the person after
    // this allows for the users to initially render with just icons and then update with images
    // this also helps because ui faces has a very low rate limit
    async function fetchFaces() {
      if (!users.length) return null
      try {
        const { data } = await axios.get(`https://uifaces.co/api?limit=${users.length}`, {
          headers: {
            'X-API-KEY': 'B11A4D94-08F747B8-A869916B-A2E0DA18',
            'Accept': 'application/json',
            'Cache-Control': 'no-cache'
          }
        })
        const usersList = users.map((person, index) => ({ ...person, image: data[index] ?.photo}))

        setUsers(usersList)
      } catch (error) {
        console.log(error)
      }
      
    }
    fetchFaces()
  }, [users.length])

  if (!users.length) return <Loading />

  return (
    <SafeAreaView>
      <FlatList
        data={users}
        renderItem={({ item }) => {

          return (
            <UserRow {...item} />
          )
        }}
        keyExtractor={item => `userList-${item.id}`}
      />
    </SafeAreaView>
  )

}

export default Users