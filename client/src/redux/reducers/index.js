import { combineReducers } from "redux";
import { authreducer } from "./auth-reducer";
import { studentReducer } from "./student-reducer";

const rootReducer = combineReducers({
    auth: authreducer,
    student: studentReducer
})

export default rootReducer