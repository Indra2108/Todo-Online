import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

// import styles
import styles from './styles'

// IMPORT LIBRARY
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Userprofiles extends Component {
    removeDataStorage = async () => {
        try {
            await AsyncStorage.removeItem('token')
                .then(() => {
                    this.props.navigation.replace('Mengsplash')
                })
        } catch (error) {
            console.log(error)
        }
        console.log('Done.')
    }

    logOutConfirmation = () => {
        Alert.alert(
            "Perhatian!",
            "Apa anda yakin ingin logout?",
            [
                {
                    text: "Oke",
                    onPress: () => this.removeDataStorage()
                },
                {
                    text: 'Batal',
                    style: "cancel"
                }
            ],
            {
                cancelable: true
            }
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>User Profiles</Text>

                <TouchableOpacity style={styles.tombol} onPress={() => this.logOutConfirmation()}>
                    <Text style={styles.tulisantombol}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}