import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';

// IMPORT STYLES
import styles from './styles'

// IMPORT LIBRARY
import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORT GAMBAR
import edit from '../assets/edit.png';
import buang from '../assets/remove.png';
import tambah from '../assets/plus.png';
import refresh from '../assets/refresh.png';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            token: '',
            dataToDo: [],
            title: '',
            note: ''
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('token')
            .then(value => {
                let data = JSON.parse(value)
                this.setState({ token: data })
                console.log(this.state.token)
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
                this.setState({ dataToDo: response.data })
                console.log(this.state.dataToDo)
            })
            .catch(error => console.log(error))
    }

    DaftarList = () => {
        return this.state.dataToDo.map((value) => {
            return (
                <View style={styles.backgroundList}>
                    <View style={styles.backgroundtitle}>
                        <Text style={styles.tekstitle}>{value.title}</Text>
                    </View>
                    <View style={styles.backgroundnote}>
                        <Text style={styles.teksnote}>{value.note}</Text>
                    </View>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <this.DaftarList />
                </ScrollView>
                <View style={styles.backgroundInput}>
                    <Text>Tambah Task</Text>
                    <View style={styles.gambarlogo}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddToDo')}>
                            <Image source={tambah} style={styles.tambahlogo} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.mengGetTodo()}>
                            <Image source={refresh} style={styles.tambahlogo} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}