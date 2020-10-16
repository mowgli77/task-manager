import {combineReducers} from "redux"
import {toDosReducer} from "./toDosReducer"
import {reducer as formReducer} from "redux-form"


const rootReducer = combineReducers({
    toDoDatas: toDosReducer,
    form: formReducer
})

export default rootReducer