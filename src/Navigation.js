import React from 'react'
import 'react-native-gesture-handler';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import Users from './screens/users'
import TodoScreen from './screens/todo'
import FeedScreen from './screens/feed'
import CommentsScreen from './screens/comments'
import AddPost from './screens/addPost'

Icon.loadFont()


const UserStack = createStackNavigator({
  Users,
}, {
  defaultNavigationOptions: {
    title: 'Users'
  }
});

const TodoStack = createStackNavigator({
  Todo: TodoScreen,
}, {
  defaultNavigationOptions: {
    title: 'Todo'
  }
});

const FeedStack = createStackNavigator({
  Feed: {
    screen: FeedScreen,
  },
  Comments: CommentsScreen,
  AddPost: AddPost
}, {
  defaultNavigationOptions: {
    title: 'Feed'
  }
});

const AppNavigator = createBottomTabNavigator({
  Users: UserStack,
  Feed: FeedStack,
  Todo: TodoStack
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Users') {
          iconName = 'md-people'

        } else if (routeName === 'Feed') {
          iconName = `ios-list`;
        } else {
          iconName = 'ios-checkmark-circle-outline'
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#0599fd',
      inactiveTintColor: 'gray',
    },
    
    
  });

export default createAppContainer(AppNavigator);

