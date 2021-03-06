import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import { Input, Button } from '../components/common'
import axios from 'axios'
import { connect } from 'react-redux'
import { login } from '../redux/actions'

class Otp extends Component {

    state = { otp:'' }

    static navigationOptions = {
        header:null,
    }

    submitOtp() {
        axios.post('/student/login', { mobile:this.props.navigation.state.params.mobile })
        .then(res => {
            this.props.login(res.data)
            this.props.navigation.navigate('AppStack')
        })
        .catch(err => {
            Alert.alert('','Server error while logging in. \n Please try again later', [{ text:'Okay' }])
            console.log(err)
        })
    }

    render() {
        return(
            <View style={{ flex:1, justifyContent:'center' }}>
                <Input
                    placeholder="Enter OTP"
                    value={this.state.otp}
                    onChangeText={(text) => this.setState({ otp: text })}
                />
                <Button onPress={ () => this.submitOtp() }>Login</Button>
            </View>
        )
    }
}

export default connect(null, { login })(Otp)