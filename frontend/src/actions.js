// ACTION TYPES
import actionTypes from "./actionTypes"
import axios from "axios"
import Cookie from "js-cookie"

export const listTodos = () => async (dispatch,getState)=>{
    try {
        const {userSignIn} = getState()
        const token = userSignIn.userInfo.token
        dispatch({type:actionTypes.LIST_TODOS_REQUEST})
        const {data} = await axios.get("http://localhost:1234/todos",{headers:{"Authorization":token}})
        
        dispatch({type:actionTypes.LIST_TODOS_SUCCESS,payload:data.notes})
    } catch (error) {
        dispatch({type:actionTypes.LIST_TODOS_FAIL,payload:error})
    }
}

export const addTodo = (token,todoData) =>async (dispatch)=>{
    
    try{
        dispatch({type:actionTypes.ADD_TODO_REQUEST})
        const {data} = await axios.post("http://localhost:1234/add-todo",{todoData},
        {headers:{
            "Authorization":token
        }});
        dispatch({type:actionTypes.ADD_TODO_SUCCESS,payload:data})
        
    }catch(err){
        dispatch({type:actionTypes.ADD_TODO_FAIL,payload:err})
    }
}



export const toggleForm = () => (dispatch, getState)=>{    
    const formOpen = getState()   
    console.log(formOpen); 
    dispatch({type:actionTypes.TOGGLE_NOTE_FORM})
}

export const logOut = () => async (dispatch) => {
    console.log(actionTypes.USER_LOG_OUT);
    await Cookie.remove("userInfo")
    dispatch({type:actionTypes.USER_LOG_OUT})
}

export const userRegister = (userData) => async(dispatch,getState)=>{
    try{
        dispatch({type:actionTypes.USER_REGISTER_REQUEST})
        const {data} = await axios.post("http://localhost:1234/register",userData)        
        dispatch({type:actionTypes.USER_REGISTER_SUCCESS,payload:data})
        await Cookie.set("userInfo", JSON.stringify(data))
    }catch(err){
        dispatch({type:actionTypes.USER_REGISTER_FAIL,payload:err})
    }
}
export const userLogin = (userData) => async(dispatch,getState)=>{
    try{
        dispatch({type:actionTypes.USER_SIGNIN_REQUEST})
        const {data} = await axios.post("http://localhost:1234/login",userData)  
        console.log(data);      
        dispatch({type:actionTypes.USER_SIGNIN_SUCCESS,payload:data})
        await Cookie.set("userInfo", JSON.stringify(data))
    }catch(err){
        dispatch({type:actionTypes.USER_SIGNIN_FAIL,payload:err})
    }
}
