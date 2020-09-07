import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, FlatList, Button, Text } from 'react-native'
import axios from 'axios'
import RowWithCheckBox from '../../components/RowWithCheckBox'

const Todo = () => {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    async function fetchTodos() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodoList(data)
    }
    fetchTodos()
  }, [])
 
  return (
    <SafeAreaView>
      <FlatList
        data={todoList}
        renderItem={({ item }) => {

          return (
            <RowWithCheckBox {...item} />
          )
        }}
        keyExtractor={item => `todoList-${item.id}`}
      />
    </SafeAreaView>
  )

}

export default Todo