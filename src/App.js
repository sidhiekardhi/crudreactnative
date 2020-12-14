import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router/router';

const App = () => {
    return (
       <NavigationContainer>
<Router></Router>

       </NavigationContainer>
    )
}

export default App
