import {toDoActions} from "./type";

const initialState = {
    userList: []
}

const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case toDoActions.CREATE_TO_DO: {

            return {...state, userList: [...state.userList, action.payload]}
        }
        case toDoActions.REMOVE_LIST: {
            return {...state, userList: state.userList.filter((item, i) => i !== action.payload)}
        }
        // case toDoActions.EDIT_LIST:{
        //
        // }

        default: {
            return {...state}
        }

    }

}

export default TodoListReducer;

// export const removeList = (index)=>{
//     return{type:toDoActions.REMOVE_LIST, payload:index}
// }