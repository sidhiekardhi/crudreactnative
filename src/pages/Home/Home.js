import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'

export default class Home extends Component {
    render() {
      
        return (
            <View style={styles.page}>
                <Text>Hello World</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page : {
        flex : 1
    },
    header: {
    paddingHorizontal: 30,
    paddingTop : 30
    },
    garis: {
        borderWidth: 1,
        marginTop : 10
    },
    listKontak :{
paddingHorizontal: 30,
marginTop: 20
    },
    title : {
        fontSize:20,
fontWeight: 'bold'
    },
    wrapperButton : {
flex: 1,
position:"absolute",
bottom: 0, right: 0, margin: 50
    }, btnTambah :{
        padding: 20,
        backgroundColor : 'skyblue',
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 9,
},
    shadowOpacity: 0.50,
shadowRadius: 12.35,

elevation: 19,
    },
})
