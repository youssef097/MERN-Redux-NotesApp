import React from 'react'
import FilterComponent from '../componets/FilterComponent';
import NotesContainer from '../componets/NotesContainer';
import {useSelector} from "react-redux"
import Cookie from "js-cookie"
import {Redirect} from "react-router-dom"
export default function HomeScreen() {
    const user = useSelector(state => state.userSignIn)  
    let token = null;
    if(user.userInfo){
         token = user.userInfo.token || Cookie.getJSON("userInfo") ||undefined
    }
    return (
        !token?<Redirect to="/register"/>:
        <React.Fragment>
            <FilterComponent />
            <NotesContainer/>
        </React.Fragment>
        
    )
}
