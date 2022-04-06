
import actionTypes from "./actionTypes"

export const saveTodoReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO_REQUEST:
            return { loading: true, success: false }
        case actionTypes.ADD_TODO_FAIL:
            return { loading: false, success: false, error: action.payload }
        case actionTypes.ADD_TODO_SUCCESS:
            return { loading: true, data: action.payload, success: true }

        default:
            return state
    }
}


export const listTodosReducer = (state = {}, action) => {
    console.log(action.type);

    switch (action.type) {
        case actionTypes.LIST_TODOS_REQUEST:
            return { loading: true }
        case actionTypes.LIST_TODOS_SUCCESS:
            return { loading: false, data: action.payload }
        case actionTypes.LIST_TODOS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}



// export const userSignInReducer = (userSignIn = {}, action) => {
//     switch (action.type) {
       
//         default:
//             return userSignIn
//     }
// }
export const logOutReducer = (userSignIn = {}, action) => {
    switch (action.type) {

        default:
            return userSignIn
    }
}

export const userRegisterReducer = (userSignIn = {}, action) => {
    switch (action.type) {
        case actionTypes.USER_REGISTER_REQUEST:
            return { loading: true, success: false }
        case "USER_LOG_OUT":
            console.log("Logging out");
            return {}
        case actionTypes.USER_REGISTER_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }
        case actionTypes.USER_REGISTER_FAIL:
            return { loading: false, success: false, error: action.payload }
            case actionTypes.USER_SIGNIN_REQUEST:
                return { loading: true, success: false}
            case actionTypes.USER_SIGNIN_SUCCESS:
                return { loading: false, success: true, userInfo: action.payload }
            case actionTypes.USER_SIGNIN_FAIL:
                return { loading: false, success: false, error: action.payload }
        default:
            return userSignIn
    }
}


export const toggleFormReducer = (state = false, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_NOTE_FORM:
            return !state
        default:
            return state
    }
}