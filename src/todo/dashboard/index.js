import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';

// IMPORT STYLES
import styles from './styles'

// IMPORT LIBRARY
import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORT GAMBAR
import edit from '../assets/edit.png';
import buang from '../assets/remove.png';
import tambah from '../assets/plus.png';
import refresh from '../assets/refresh.png';
import userprofile from '../assets/user.png';

export default class Dashboard extends Component {
    constructor() {
        super();
        console.log('==> constructor')
        this.state = {
            token: '',
            dataToDo: [],
            title: '',
            note: ''
        }
    }

    componentDidMount() {
        console.log('==> componentDidMount()')
        AsyncStorage.getItem('token')
            .then(value => {
                let data = JSON.parse(value)
                this.setState({ token: data })
                console.log(this.state.token)
            })
            .then(() => this.mengGetTodo())
    }

    mengGetTodo = () => {
        console.log('==> Get TodoAPI')
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

    deleteToDo = (id) => {
        console.log('==> Delete TodoAPI');
        fetch(`https://api-todoapp-pp.herokuapp.com/api/todo/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                Authorization: `bearer ${this.state.token}`
            },
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(respon => {
                console.log(respon)
                this.mengGetTodo()
            })
            .catch(e => console.log(e))
    }

    deleteToDoConfirmation = (value) => {
        console.log('==> Confirmation Prompt');
        Alert.alert(
            "Perhatian!",
            "Apa anda yakin ingin menghapus todo yang ini?",
            [
                {
                    text: "Oke",
                    onPress: () => this.deleteToDo(value),
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

    DaftarList = () => {
        return this.state.dataToDo.map((value) => {
            return (
                <TouchableOpacity style={styles.backgroundList} onPress={() => this.props.navigation.navigate('EditToDo', { title: value.title, note: value.note, id: value.id })}>
                    <View style={styles.backgroundtitle}>
                        <Text style={styles.tekstitle}>{value.title}</Text>
                        
                        <TouchableOpacity onPress={() => this.deleteToDoConfirmation(value.id)}>
                            <Image source={buang} style={styles.buanglogo} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.backgroundnote}>
                        <Text style={styles.teksnote}>{value.note}</Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }

    render() {
        console.log('==> render()')
        return (
            <View style={styles.container}>
                <ScrollView>
                    <this.DaftarList />
                </ScrollView>

                <View style={styles.backgroundInput}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Userprofiles')}>
                        <Image source={userprofile} style={styles.logo} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddToDo')}>
                        <Image source={tambah} style={styles.logo} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.mengGetTodo()}>
                        <Image source={refresh} style={styles.logo} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}