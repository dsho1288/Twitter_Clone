import { useSelector } from 'react-redux'

export const getCorrespondingUser = (id, users) => {
  if(!users) users = useSelector(state => state.users)
  return users.find(user => user.id === id)
}

export const assignUsers = ({ assignableList = [], users }) => {
  return assignableList.map(item => ({...item, user: getCorrespondingUser(item.userId, users) }))
}

export const extractFakeUserFromEmail = email => {
  const emailArr = email.split('@')
  return `${emailArr[0]} ${emailArr[1].split('.')[0]}`
}