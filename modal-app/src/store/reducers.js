import {combineReducers} from "redux";
import todoListReducer from './redusers/to-do/to-do-list-reducer'

        const rootReducer = combineReducers({
            todoListReducer
        })

export default rootReducer;