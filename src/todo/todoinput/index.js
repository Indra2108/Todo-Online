import React, { Component } from "react";
import { Text, TextInput, View } from 'react-native';

// IMPORT STYLES
import styles from './styles'

export default class ToDoInput extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            note: ''
        }
    }

    render() {
        let numOfLinesCompany = 0
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Judul'
                    style={styles.teksinput}
                    multiline={true}
                    numberOfLines={numOfLinesCompany}
                    onContentSizeChange={(e) => {
                        numOfLinesCompany = e.nativeEvent.contentSize.height / 18;
                    }}
                    onChangeText={title => this.setState({ title })}
                />

                <TextInput
                    placeholder='Isi Konten'
                    style={styles.teksinput}
                    multiline={true}
                    numberOfLines={numOfLinesCompany}
                    onContentSizeChange={(e) => {
                        numOfLinesCompany = e.nativeEvent.contentSize.height / 18;
                    }}
                    onChangeText={note => this.setState({ note })}
                />
            </View>
        )
    }
}