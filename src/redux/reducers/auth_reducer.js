import { LOGIN, LOGOUT } from '../types'

const initialState = {
    _id: "", name: "", mobile: "", mail: "", address: "", registerNumber: "",
    departmentName: "", departmentId: "",
    courseName: "", courseId: "",
    batchName: "", batchId: "",
    subjectData: [],
}

export default (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                _id: action.payload._id,
                name: action.payload.name,
                mobile: action.payload.mobile,
                mail: action.payload.mail,
                address: action.payload.address,
                registerNumber: action.payload.registerNumber,
                departmentName: action.payload.department.name,
                departmentId: action.payload.department._id,
                courseName: action.payload.course.name,
                courseId: action.payload.course._id,
                batchName: action.payload.batch.name,
                batchId: action.payload.batch._id,
                subjectData: action.payload.subjectData
            }
        case LOGOUT:
            return { ...initialState }
        default:
            return state
    }
}