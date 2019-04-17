import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const TopLoader = ({ loaderBackground }) => {
    return(
        <View style={{
            backgroundColor: loaderBackground || 'rgba(0, 0, 0, 0.3)',
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex:2,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <ActivityIndicator size="large" color={'#2AA564'} />
        </View>
    )
}

export { TopLoader }