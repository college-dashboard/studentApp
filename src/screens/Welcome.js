import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import { Input, Button } from '../components/common'

class Home extends Component {

    state = { mobile: '' }

    static navigationOptions = {
        header: null
    }

    submitMobile() {
        if(this.state.mobile.length === 10) {
            this.props.navigation.navigate('Otp', { mobile:this.state.mobile })
        } else {
            Alert.alert('Invalid Number', 'Please enter a valid 10 digit mobile number', [{ text:'Okay' }])
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Input
                    placeholder="Enter Mobile"
                    value={this.state.mobile}
                    onChangeText={(text) => this.setState({ mobile:text })}
                />
                <Button onPress={() => this.submitMobile()}>Login</Button>
            </View>
        )
    }
}

export default Home