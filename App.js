import React, { Component } from "react";
import { View, Text } from 'react-native';

// import screen
import Mengsplash from "./src/auth/mengsplash";
import Dashboard from "./src/todo/dashboard";
import Login from './src/auth/login';
import Register from './src/auth/register';
import Userprofiles from "./src/auth/userprofiles";

// import library
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Userprofiles" component={Userprofiles} />
    </Tab.Navigator>
  );
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Mengsplash' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Mengsplash" component={Mengsplash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Dashboard" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}