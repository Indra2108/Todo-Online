import React, { Component } from 'react';
import { View, Text } from 'react-native';

// IMPORT LIBRARY
import AsyncStorage from '@react-native-async-storage/async-storage';

// import screen
import Dashboard from '../dashboard';
import Home from '../home'

export default class Mengsplash extends Component {
    componentDidMount() {
        AsyncStorage.getItem('token')
            .then(mydata => {
                if (mydata === null) {
                    console.log('Token Kosong!')
                    this.props.navigation.replace('Home')
                } else {
                    this.props.navigation.replace('Dashboard')
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Text>xxx</Text>
        )
    }

}