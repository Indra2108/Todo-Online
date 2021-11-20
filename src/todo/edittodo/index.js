import React, { Component } from "react";
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

// IMPORT STYLES
import styles from './styles'

// IMPORT LIBRARY
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class EditToDo extends Component {
    constructor(props) {
        super(props);

        let { title, note } = this.props.route.params;
        this.state = {
            token: '',
            title: title,
            note: note
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

    editData = () => {
        let { id } = this.props.route.params;

        let dataku = JSON.stringify({
            title: this.state.title,
            note: this.state.note
        })

        fetch(`https://api-todoapp-pp.herokuapp.com/api/todo/${id}`, {
            method: 'PUT',
            redirect: 'follow',
            headers: {
                Authorization: `bearer ${this.state.token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: dataku
        })
            .then(response => response.json())
            .then(respon => {
                console.log(respon)
                alert('Berhasil diedit')
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
                    value={this.state.title}
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
                    value={this.state.note}
                    numberOfLines={numOfLinesCompany}
                    onContentSizeChange={(e) => {
                        numOfLinesCompany = e.nativeEvent.contentSize.height / 18;
                    }}
                    onChangeText={note => this.setState({ note })}
                />
                <View style={styles.tombolkirim}>
                    <TouchableOpacity onPress={() => this.editData()} style={styles.tombolkirim2}>
                        <Text style={styles.tekstombolkirim}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')} style={styles.tombolkirim3}>
                        <Text style={styles.tekstombolkirim}>Batal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}