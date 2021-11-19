import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    list: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'pink',
        borderRadius: 10,
        marginTop: '3%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    backgroundIndex: {
        width: '13%',
        padding: 10,
        backgroundColor: 'blue',
        marginRight: 10,
        alignItems: 'center',
        borderRadius: 10
    },
    textIndex: {
        color: 'white'
    },
    backgroundValue: {
        width: '70%',
        padding: 10,
        backgroundColor: 'blue',
        marginRight: 10,
        borderRadius: 10,
    },
    value: {
        color: 'white'
    },
    backgroundGambar: {
        flexDirection: 'row',
    },
    backgroundInput: {
        padding: 15,
        backgroundColor: 'yellow',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {

    },
    editlogo: {
        width: 40,
        height: 40
    },
    buanglogo: {
        width: 40,
        height: 40
    },
    tambahlogo: {
        width: 40,
        height: 40
    }
})