import React, { Component } from "react";
import { View, Text, TouchableOpacity } from 'react-native';

// Import style
import styles from "./styles";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.tombol} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.tulisantombol}>REGISTER</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tombol} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.tulisantombol}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}