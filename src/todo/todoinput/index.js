import React, { Component } from "react";
import { Text, TextInput, View } from 'react-native';

export default class ToDoInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput placeholder='Judul' />
                </View>
                <View>
                    <TextInput placeholder='Isi Konten' />
                </View>
            </View>
        )
    }
}