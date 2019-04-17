import React from 'react'
import { View, Text } from 'react-native'

const XText = (props) => {
    return <Text style={[{ color: 'black', textAlign: 'center' }, props.style]}>{props.children}</Text>
}

export { XText }