import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Home from './components/containers/Home'
import Friends from './components/containers/Friends'

const Navigation = StackNavigator({
    Home: { screen: Home },
    Friends: { screen: Friends },
})

export default Navigation