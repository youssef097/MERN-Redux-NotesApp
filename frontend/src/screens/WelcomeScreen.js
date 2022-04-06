import React,{useEffect} from 'react'
import {useSelector} from "react-redux"
import RegisterFormComponent from "../componets/RegisterFormComponent"
import LoginFormComponent from '../componets/LoginFormComponent'
import { Redirect } from 'react-router-dom'

export default  function  WelcomeScreen(props) {
    
    const path = props.match.path
    const user = useSelector((state) =>  state.userSignIn)
    const {loading,success, userInfo} = user

    return (
        !loading?
        userInfo && userInfo.token?<Redirect to="/home" />:path === "/login"?<LoginFormComponent/>:<RegisterFormComponent/>
        :"Loading"
    )
}
