import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import { Input, Button } from '../components/common'
import axios from 'axios'
import { connect } from 'react-redux'
import { login } from '../redux/actions'

class Splash extends Component {


    static navigationOptions = {
        header:null,
    }

    componentDidMount() {
        if(this.props.auth._id) {
            this.props.navigation.navigate('AppStack')
        } else {
            this.props.navigation.navigate('Welcome')
        }
    }

    render() {
        return(
            <View style={{ flex:1, justifyContent:'center' }}>
                <Text style={{ textAlign:'center' }}>Loading</Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps)(Splash)