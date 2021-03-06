import React from 'react'
import { Image, Text, StyleSheet } from 'react-native'
import { TabNavigator } from 'react-navigation'
import config from '../../config'
import Posts from './Posts'
import NewPost from './NewPost'
import Users from './Users'

export default TabNavigator({
        MainTab: {
            screen: Posts,
            path: '/',
            navigationOptions: {
                title: 'Feed',
                tabBarLabel: '',
                tabBarIcon: ({ focused }) => (
                    <Image style={ styles.icon }
                        source={ focused ? config.images.feedFocus : config.images.feedUnfocus } />
                )
            }
        },
        NewPost: {
            screen: NewPost,
            path: '/newPost',
            navigationOptions: {
                title: 'Post',
                tabBarLabel: '',
                tabBarIcon: ({ focused }) => (
                    <Image style={ styles.icon }
                        source={ focused ? config.images.newfocus : config.images.newUnfocus } />
                )
            }
        },
        UsersTab: {
            screen: Users,
            path: '/users',
            navigationOptions: {
                title: 'Users',
                tabBarLabel: '',
                tabBarIcon: ({ focused }) => (
                    <Image style={ styles.icon }
                        source={ focused ? config.images.usersFocus : config.images.usersUnfocus } />
                )
            }
        },
        ProfileTab: {
            screen: Users,
            path: '/profile',
            navigationOptions: {
                title: 'Profile',
                tabBarLabel: '',
                tabBarIcon: ({ focused }) => (
                    <Image style={ styles.icon }
                        source={ focused ? config.images.userProfileIcon : config.images.userProfileUnfocus } />
                )
            }
        },
}, {
        tabBarPostition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false
})

// blue color: #3A7CA5
const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20,
        marginTop: 10
    }
})