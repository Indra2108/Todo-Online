import React, { Component } from "react";
import { View, Text } from 'react-native';

// import screen
import Mengsplash from "./src/mengsplash";
import Dashboard from "./src/dashboard";
import Home from './src/home'
import Login from './src/login';
import Register from './src/register';

// import library
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Mengsplash'>
          <Stack.Screen name="Mengsplash" component={Mengsplash} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}