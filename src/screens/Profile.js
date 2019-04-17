import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { PlainCard, Button, XText } from '../components/common'
import { connect } from 'react-redux'
import { logout } from '../redux/actions'

class Profile extends Component {

    logout() {
        this.props.logout()
        this.props.navigation.navigate('AuthStack')
    }

    render() {
        const { name, mobile, mail, registerNumber, address } = this.props.auth
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 3, justifyContent: 'center' }}>
                    <XText style={{ fontSize: 20 }}>{name}</XText>
                    <XText>{mobile}</XText>
                    <XText>{registerNumber}</XText>
                    <XText>{mail}</XText>
                    <XText>{address}</XText>

                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Button onPress={() => this.logout()}>LOGOUT</Button>
                </View>
            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(Profile)  