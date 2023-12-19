import { combineReducers } from "redux";
import { authreducer } from "./auth-reducer";
import { studentReducer } from "./student-reducer";
import {attendsReducer} from "./attendence-student"

const rootReducer = combineReducers({
    auth: authreducer,
    student: studentReducer,
    attend: attendsReducer,
})

export default rootReducer