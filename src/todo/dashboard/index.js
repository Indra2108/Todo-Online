import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';

// IMPORT STYLES
import styles from './styles'

// IMPORT LIBRARY
import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORT GAMBAR
import edit from '../assets/edit.png';
import buang from '../assets/remove.png';
import tambah from '../assets/plus.png'

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
            })
            .catch(error => console.log(error))
    }

    DaftarList = () => {
        return this.state.dataToDo.map((value, index) => {
            return (
                <View style={styles.list}>
                    <View style={styles.backgroundValue}>
                        <Text style={styles.value}>{value}</Text>
                    </View>
                    <View style={styles.backgroundGambar}>
                        <TouchableOpacity>
                            <Image source={edit} style={styles.editlogo} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={buang} style={styles.buanglogo} />
                        </TouchableOpacity>
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ToDoInput')} style={styles.backgroundInput}>
                    <Text>Tambah Task</Text>
                    <Image source={tambah} style={styles.tambahlogo} />
                </TouchableOpacity>
            </View>
        )
    }
}