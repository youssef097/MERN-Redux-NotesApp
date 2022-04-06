import React, { useEffect } from 'react'
import {useSelector} from "react-redux"
import { Link} from "react-router-dom"
export default  function HeaderComponent() {
    
    const userSignIn =  useSelector(state => state.userSignIn)
    const {userInfo,loading,success} = userSignIn

   

    return loading?"Loading...": <header>
        <div className="search-container">
            <input type="text" placeholder="&#128269; Search" name="search" id="search" />
        </div>
        {userInfo&&userInfo.token? 
            <div className="profile">
            <img src="/profile-img" className="profile-img" alt="" />
            <span className="profile-name">{userInfo.user.name.split(" ")[0]}</span>
            <span className="profile-bell">&#128276;</span>
            </div>:<Link to="/login"><button className="button"> Log in</button></Link>
        }
    </header>
    
}
