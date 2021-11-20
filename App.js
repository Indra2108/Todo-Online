import React, { Component } from "react";

// import screen
import Mengsplash from "./src/auth/mengsplash";
import Dashboard from "./src/todo/dashboard";
import Login from './src/auth/login';
import Register from './src/auth/register';
import Userprofiles from "./src/auth/userprofiles";
import AddToDo from "./src/todo/todoinput";

// import library
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Mengsplash' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Mengsplash" component={Mengsplash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="AddToDo" component={AddToDo} />
          <Stack.Screen name="Userprofiles" component={Userprofiles} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}