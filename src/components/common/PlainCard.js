import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

const PlainCard = ({ children, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.mainContainer}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        // shadowColor: 'rgba(0,0,0,0.5)', // IOS
        // shadowOffset: { height: 5, width: 1 }, // IOS
        // shadowOpacity: 0.5, // IOS
        // shadowRadius: 3, //IOS
        elevation:1, // Android

        borderRadius:10,
        elevation:1,
        padding:15,

        marginTop:10,
        marginBottom:10,
        marginLeft:20, 
        marginRight:20
    }
})

export { PlainCard }