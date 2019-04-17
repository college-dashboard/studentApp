import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Textarea = ({ value, onChangeText, placeholder, maxLength  }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholderTextColor="rgba(100, 144, 177, 0.52)"
                style={styles.textarea}
                placeholder={placeholder}
                value={value}
                maxLength={maxLength}
                multiline={true}
                numberOfLines={6}
                onChangeText={onChangeText}
                underlineColorAndroid={'transparent'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textarea: {
        color: 'black',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        marginLeft: 10,
        marginRight: 10,
        textAlignVertical: 'top'
    },
    container: {
        backgroundColor:'#f2f2f2',
        marginTop: 10,
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20
    }
})

export { Textarea }