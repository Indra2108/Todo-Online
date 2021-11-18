import React, { Component } from "react";
import { View, Text } from 'react-native';

// import screen
import Mengsplash from "./src/auth/mengsplash";
import Dashboard from "./src/todo/dashboard";
import Login from './src/auth/login';
import Register from './src/auth/register';

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
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}