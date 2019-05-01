import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from '../components/common'

class Home extends Component {

    state = { mobile: '' }
    static navigationOptions = {
        header: null
    }

    submitMobile() {
        this.props.navigation.navigate('Otp', { mobile:this.state.mobile })
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Input
                    placeholder="Enter Mobile"
                    value={this.state.mobile}
                    onChangeText={(text) => this.setState({ mobile: text })}
                />
                <Button onPress={() => this.submitMobile()}>Login</Button>
            </View>
        )
    }
}

export default Home