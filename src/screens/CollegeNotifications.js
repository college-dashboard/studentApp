import React, { Component } from 'react'
import { Modal, View, Text } from 'react-native'
import { Button, PlainCard, XText } from '../components/common'
import axios from 'axios'
import { connect } from 'react-redux'

class CollegeNotifications extends Component {

    state = { notifications: [], description: '', showDescriptionModal: false }

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        axios.post('/notification/get', { params:{ ccollege:true }})
            .then(res => {
                this.setState({ notifications: res.data })
            })
            .catch(err => console.log(err))
    }

    showModal(title, description) {
        this.setState({ title, description, showDescriptionModal: true })
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>

                <Modal
                    visible={this.state.showDescriptionModal}
                    transparent={true}
                    onRequestClose={() => this.setState({ showDescriptionModal: false })}
                >
                    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={{ backgroundColor: 'white', padding: 30, margin: 30, borderRadius: 10 }}>
                            <Text style={{ fontSize: 22, marginBottom: 10, textAlign: 'center', color: 'black' }}>{this.state.title}</Text>
                            <Text style={{ textAlign: 'center', color: 'black' }}>{this.state.description}</Text>
                        </View>
                    </View>
                </Modal>

                {
                    this.state.notifications.length > 0 ?
                        <View style={{ flex: 1, marginTop: 50 }}>
                            {
                                this.state.notifications.map(notification => {
                                    return (
                                        <PlainCard key={notification._id} onPress={() => this.showModal(notification.title, notification.description)}>
                                            <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '500', color: 'black' }}>{notification.title}</Text>
                                        </PlainCard>
                                    )
                                })
                            }
                        </View>
                        :
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center' }}>No Notifications!</Text>
                        </View>
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(CollegeNotifications)