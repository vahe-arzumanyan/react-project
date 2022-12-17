import {combineReducers} from "redux";
import TodoListReducer from './redusers/to-do/to-do-list-reducer'

        const rootReducer = combineReducers({
            TodoListReducer
        })

export default rootReducer;