import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {userLogin} from "../actions"
import { Link } from "react-router-dom"

export default function LoginFormComponent(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()        

        dispatch(userLogin({email, password}))

    }


    return (
        <div className="form-container">
            <form onSubmit={(e) => handleSubmit(e)} className="form register">
                <h1>Login</h1>

                <div className="form-field">
                    <label htmlFor="">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" required />
                </div>
                <div className="form-field">
                    <label htmlFor="">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} name="email" type="password" required />
                </div>

                <div className="form-field">

                    <button type="submit">
                        Join
                    </button>
                    <div className="small">
                        New?
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
