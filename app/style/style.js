
import {
    StyleSheet,
Image
} from 'react-native'

export default StyleSheet.create({
    image:{
        width:80,
        height:50
    },
    container: {
        backgroundColor: '#ddd',
        paddingLeft:10,
        paddingRight:10,
        flex: 1,
        paddingTop:56
    },
    text:{
        flex:1,
        height:40
    },
    item:{
        flexDirection:'row',
        backgroundColor: "#FFF",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    },
    out: {
    },
    list:{
        flex: 1
    },
    title: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    button: {
        flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18, color: '#FFFFFF', fontWeight: '500'
    },
    navigationBar:{
        alignItems: 'center',
        backgroundColor: '#55ACEE',
        shadowOffset:{
            width: 1,
            height: 0.5,
        },
        shadowColor: '#55ACEE',
        shadowOpacity: 0.8,
    },
    loading:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});