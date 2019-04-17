import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import { PlainCard, XText } from '../components/common'

class Home extends Component {

    state = { department: null }

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this.fetchStudentDetails(this.props.auth._id)
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    fetchStudentDetails(studentId) {
        axios.get(`/student/${studentId}`)
            .then(res => {
                this.fetchCourseDetails(res.data.course._id, res.data)
                this.setState({ student: res.data })
            })
            .catch(err => console.log(err))
    }

    fetchCourseDetails(courseId, student) {
        axios.get(`/course/${courseId}`)
            .then(res => {

                let course = res.data[0]
                let semesterSubjectArray = {}

                course.subjects.forEach(each => {
                    if (semesterSubjectArray[each.semester]) {
                        semesterSubjectArray[each.semester].push(each)
                    } else {
                        semesterSubjectArray[each.semester] = [each]
                    }
                })

                this.setState({ course })

                this.combineSubjectAndStudent(semesterSubjectArray, student)

            })
            .catch(err => console.log(err))
    }

    combineSubjectAndStudent(semesterSubjectArray, student) {

        if (!student.subjectData) { student.subjectData = [] }
        const { subjectData } = student

        Object.keys(semesterSubjectArray).map((semNumber, index) => {
            return semesterSubjectArray[semNumber].map((eachSubject, innerIndex) => {
                let foundItem = subjectData.filter(each => each.subjectId === eachSubject._id)
                if (foundItem.length > 0) {
                    return semesterSubjectArray[semNumber][innerIndex].subjectData = foundItem[0]
                } else {
                    return semesterSubjectArray[semNumber][innerIndex].subjectData = {
                        subjectId: eachSubject._id,
                        firstInternal: null,
                        secondInternal: null,
                        attendacePercentage: null
                    }
                }
            })
        })

        this.setState({ subjects: semesterSubjectArray })
    }

    render() {
        if (this.state.student) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <XText style={{ flex: 5, fontSize: 18 }}>Subject</XText>
                        <XText style={{ flex: 2, fontSize: 18 }}>1st Int</XText>
                        <XText style={{ flex: 2, fontSize: 18 }}>2nd Int</XText>
                        <XText style={{ flex: 1, fontSize: 18 }}>Attnd.</XText>
                    </View>

                    {
                        this.state.subjects && Object.keys(this.state.subjects).length > 0 &&
                        Object.keys(this.state.subjects).map((key, index) => {
                            const subjects = this.state.subjects[key]
                            return (
                                <View key={key}>
                                    {
                                        subjects && subjects.length > 0 &&
                                        subjects.map((each, index) => {
                                            return (
                                                <View key={each._id} style={{
                                                    flexDirection: 'row', justifyContent: 'space-around',
                                                    borderTopWidth: 1, borderTopColor: '#e2e2e2', padding: 5
                                                }}>
                                                    <XText style={{ flex: 5 }}>{each.name}</XText>
                                                    <XText style={{ flex: 2 }}>{each.subjectData.firstInternal || 'NA'}</XText>
                                                    <XText style={{ flex: 2 }}>{each.subjectData.secondInternal || 'NA'}</XText>
                                                    <XText style={{ flex: 1 }}>{each.subjectData.attendancePercentage || 'NA'}</XText>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            )
                        })
                    }

                </View>
            )

        } else {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>Loading..</Text>
                </View>
            )

        }
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Home)