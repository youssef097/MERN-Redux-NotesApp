import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,compose, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import {userSignInReducer,userRegisterReducer, saveTodoReducer,listTodosReducer,toggleFormReducer,logOutReducer} from "./reducers"
import  Cookie from "js-cookie"

const initialState =  {todos:[],userSignIn:{userInfo:Cookie.getJSON("userInfo")||{}} }

const reducers = combineReducers({
  saveTodo:saveTodoReducer,  
  userSignIn:logOutReducer,
  userSignIn:userRegisterReducer,
  todos:listTodosReducer,
  toggleForm:toggleFormReducer
})

const store = createStore(reducers, initialState,  compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) )
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

export {store};