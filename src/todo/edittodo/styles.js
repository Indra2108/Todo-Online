import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    teksinputjudul: {
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'yellow',
        fontSize: 20,
    },
    teksinputkonten: {
        padding: 10,
        backgroundColor: 'yellow',
        fontSize: 20,
        flex: 1
    },
    tombolkirim: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tombolkirim2: {
        flex: 1,
        alignItems: 'center',
        padding: 25,
        backgroundColor: 'blue'
    },
    tombolkirim3: {
        flex: 1,
        alignItems: 'center',
        padding: 25,
        backgroundColor: 'red'
    },
    tekstombolkirim: {
        color: 'white',
        fontWeight: 'bold'
    },
})