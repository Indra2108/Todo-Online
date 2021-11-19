import React, { Component } from "react";
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

// IMPORT STYLES
import styles from './styles'

// IMPORT LIBRARY
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ToDoInput extends Component {
    constructor() {
        super();
        this.state = {
            token: '',
            title: '',
            note: ''
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('token')
            .then(value => {
                let data = JSON.parse(value)
                this.setState({ token: data })
            })
            .catch(e => console.log(e))
    }

    mengkirimData = () => {
        let formData = new FormData()
        formData.append('title', this.state.title);
        formData.append('note', this.state.note);

        fetch('https://api-todoapp-pp.herokuapp.com/api/todo', {
            method: 'POST',
            body: formData,
            redirect: 'follow',
            headers: {
                Authorization: `bearer ${this.state.token}`,
                Accept: 'application/json'
            },
        })
            .then(response => response.json())
            .then(respon => {
                console.log(respon)
                alert('Berhasil terkirim')
            })
            .catch(e => { 
                console.log(e)
                alert(e)
            })
    }

    render() {
        let numOfLinesCompany = 0
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Judul'
                    style={styles.teksinputjudul}
                    multiline={true}
                    numberOfLines={numOfLinesCompany}
                    onContentSizeChange={(e) => {
                        numOfLinesCompany = e.nativeEvent.contentSize.height / 18;
                    }}
                    onChangeText={title => this.setState({ title })}
                />

                <TextInput
                    placeholder='Isi Konten'
                    style={styles.teksinputkonten}
                    multiline={true}
                    numberOfLines={numOfLinesCompany}
                    onContentSizeChange={(e) => {
                        numOfLinesCompany = e.nativeEvent.contentSize.height / 18;
                    }}
                    onChangeText={note => this.setState({ note })}
                />
                <View style={styles.tombolkirim}>
                    <TouchableOpacity onPress={() => this.mengkirimData()} style={styles.tombolkirim2}>
                        <Text style={styles.tekstombolkirim}>Kirim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')} style={styles.tombolkirim3}>
                        <Text style={styles.tekstombolkirim}>Batal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}