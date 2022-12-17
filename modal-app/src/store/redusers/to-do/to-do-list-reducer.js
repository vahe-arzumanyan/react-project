import {toDoActions} from "./type";

const initialState = {
    toDoList: []
}

const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case toDoActions.CREATE_TO_DO: {

            return {...state, toDoList: [...state.toDoList, action.payload]}
        }
        case toDoActions.REMOVE_LIST: {
            return {...state, toDoList: state.toDoList.filter((item, i) => i !== action.payload)}
        }

        default: {
            return {...state}
        }

    }

}

export default TodoListReducer;

// export const removeList = (index)=>{
//     return{type:toDoActions.REMOVE_LIST, payload:index}
// }