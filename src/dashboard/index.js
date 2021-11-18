import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import styles
import styles from './styles'

// IMPORT LIBRARY
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Dashboard extends Component {
    removeDataStorage = async () => {
        try {
            await AsyncStorage.removeItem('token')
        } catch (error) {
            console.log(error)
        }
        console.log('Done.')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Ini Dashboard</Text>
                
                <TouchableOpacity style={styles.tombol} onPress={() => this.removeDataStorage()}>
                    <Text style={styles.tulisantombol}>HAPUS TOKEN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}