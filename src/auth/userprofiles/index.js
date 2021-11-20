import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

// import styles
import styles from './styles'

// IMPORT LIBRARY
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Userprofiles extends Component {
    constructor() {
        super();

        this.state = {
            token: ''
        }

        AsyncStorage.getItem('token')
            .then(value => {
                let data = JSON.parse(value)
                this.setState({ token: data })
                console.log(this.state.token)
            })
            .catch(e => console.log(e))
    }

    removeDataStorage = async () => {
        try {
            await AsyncStorage.removeItem('token')
                .then(() => {
                    this.props.navigation.replace('Mengsplash')
                })
        } catch (error) {
            console.log(error)
        }
        console.log('Remove data from AsyncStorage [Done].')
    }

    logOut = () => {
        fetch('https://api-todoapp-pp.herokuapp.com/api/auth/logout', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `bearer ${this.state.token}`
            },
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(respon => {
                console.log(respon)
                this.removeDataStorage()
            })
            .catch(e => console.log(e))
    }

    logOutConfirmation = () => {
        Alert.alert(
            "Perhatian!",
            "Apa anda yakin ingin logout?",
            [
                {
                    text: "Oke",
                    onPress: () => this.logOut()
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
                <Text style={styles.teksuser}>User Profiles</Text>

                <TouchableOpacity style={styles.tombol} onPress={() => this.logOutConfirmation()}>
                    <Text style={styles.tulisantombol}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}