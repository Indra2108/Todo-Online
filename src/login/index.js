import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

// IMPORT STYLE
import styles from "./styles";

// IMPORT PICTURE
import open from '../assets/eye.png';
import close from '../assets/hidden.png';

// IMPORT LIBRARY
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            hide: true,
            token: ''
        }
    }

    saveDataStorage = async (value) => {
        let dataku = JSON.stringify(value)
        try {
            await AsyncStorage.setItem('token', dataku)
        } catch (error) {
            console.log(error)
        }
    }

    readDataStorage = () => {
        return AsyncStorage.getItem('token', (error, result) => {
            let mydata = JSON.parse(result)
            if (mydata === null) {
                alert('Token Kosong!')
            } else {
                return alert(mydata)
            }
        });
    }

    removeDataStorage = async () => {
        try {
            await AsyncStorage.removeItem('token')
        } catch (error) {
            console.log(error)
        }
        console.log('Done.')
    }


    loginData = () => {
        let dataku = {
            email: this.state.email,
            password: this.state.password,
        }

        fetch('https://api-todoapp-pp.herokuapp.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataku)
        })
            .then((response) => response.json())
            .then((mengrespon) => {
                console.log(mengrespon)
                this.setState({ token: mengrespon.token.original.access_token })
                this.saveDataStorage(this.state.token)
            })
            .catch(error => { console.log(error) })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputbackground}>
                    <TextInput
                        placeholder='Alamat Email anda'
                        style={styles.textinput}
                        onChangeText={(email) => { this.setState({ email }) }}
                    />
                </View>

                <View style={styles.inputbackground}>
                    <TextInput
                        placeholder='Password baru'
                        style={styles.inputbackground}
                        secureTextEntry={this.state.hide}
                        onChangeText={(password) => { this.setState({ password }) }}
                    />

                    <TouchableOpacity onPress={() => this.state.hide ? this.setState({ hide: false }) : this.setState({ hide: true })}>
                        <Image source={this.state.hide ? open : close} style={styles.eye} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.tombol} onPress={() => this.loginData()}>
                    <Text style={styles.tulisantombol}>LOGIN</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.tombol} onPress={() => alert(this.state.token)}>
                    <Text style={styles.tulisantombol}>GET TOKEN FROM API</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tombol} onPress={() => this.readDataStorage()}>
                    <Text style={styles.tulisantombol}>GET TOKEN FROM ASYNCSTORAGE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tombol} onPress={() => this.removeDataStorage()}>
                    <Text style={styles.tulisantombol}>DELETE TOKEN FROM ASYNCSTORAGE</Text>
                </TouchableOpacity> */}
            </View>
        )
    }
}