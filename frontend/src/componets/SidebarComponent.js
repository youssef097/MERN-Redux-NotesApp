import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import Cookie from "js-cookie"
import { Link } from "react-router-dom"
import { logOut } from "../actions"
export default function SidebarComponent() {

    const dispatch = useDispatch()
    const user = useSelector(state => state.userSignIn)
    let token;
    if (user.userInfo) {
        token = user.userInfo.token || Cookie.getJSON("userInfo") || undefined
    }
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logOut())
    }

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Link to="/home">TODO</Link>
            </div>
            <ul className="sidebar-list">
                <li> <h3>Progress</h3>
                    <ul>
                        <li>Sports: 24%</li>

                        <li>Expressive: 24%</li>

                        <li>Ocupational: 24%</li>
                    </ul>
                </li>
                <li> <h3>About</h3> </li>
                <li> <h3>Info</h3> </li>



                {token && <button className="logout" onClick={(e) => handleLogout(e)}>Logout</button>}
            </ul>

        </div>
    )
}
