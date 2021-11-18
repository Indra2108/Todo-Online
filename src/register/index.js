import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

// IMPORT STYLE
import styles from "./styles";

// IMPORT PICTURE
import open from '../assets/eye.png';
import close from '../assets/hidden.png';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            hide: true,
        }
    }

    registerData = () => {
        let dataku = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        }

        fetch('https://api-todoapp-pp.herokuapp.com/api/auth/register', {
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
            })
            .catch(error => { console.log(error) })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputbackground}>
                    <TextInput
                        placeholder='Nama lengkap anda'
                        style={styles.textinput}
                        onChangeText={(name) => { this.setState({ name }) }}
                    />
                </View>

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

                <View style={styles.inputbackground}>
                    <TextInput
                        placeholder='Ulangi Password'
                        style={styles.inputbackground}
                        onChangeText={(password_confirmation) => { this.setState({ password_confirmation }) }}
                    />

                    <TouchableOpacity onPress={() => this.state.hide ? this.setState({ hide: false }) : this.setState({ hide: true })}>
                        <Image source={this.state.hide ? open : close} style={styles.eye} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.tombol} onPress={() => this.registerData()}>
                    <Text style={styles.tulisantombol}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        )
    }
}