import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import styles
import styles from './styles'

// IMPORT LIBRARY
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            token: '',
            dataToDo: []
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('token')
            .then(value => {
                let data = JSON.parse(value)
                this.setState({ token: data })
            })
            .then(() => this.mengGetTodo())
    }

    mengGetTodo = () => {
        fetch('https://api-todoapp-pp.herokuapp.com/api/todo', {
            method: 'GET',
            redirect: 'follow',
            headers: {
                Authorization: `bearer ${this.state.token}`,
            },
        })
            .then(respon => respon.json())
            .then(response => {
                console.log(response)
                this.setState({dataToDo: response.data})
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Ini Dashboard</Text>
                <TouchableOpacity style={styles.tombol}>
                    <Text style={styles.tulisantombol}>HAPUS TOKEN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}