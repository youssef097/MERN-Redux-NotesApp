import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { userRegister} from "../actions"
import {Link, Redirect} from "react-router-dom"

export default function RegisterFormComponent(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePasswrod] = useState("")


    const userRegisterStatus = useSelector(state => state.userSignIn)

    const {loading,success} = userRegisterStatus
    
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log({name, email, password});
        if(password === rePassword){
            dispatch(userRegister({name, email, password}))
        }else{
            alert("Password mus be equal")
        }
    }

  

    
    return (
        <div className="form-container">
            {success&&<Redirect to="/home"/>}
            <form  onSubmit={(e)=> handleSubmit(e) } className="form register">
                <h1>Welcome to todoApp</h1>
                <div className="form-field">
                    <label htmlFor="">Name</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" required />
                </div>
                <div className="form-field">
                    <label htmlFor="">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" required />
                </div>
                <div className="form-field">
                    <label htmlFor="">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" required />
                </div>
                <div className="form-field">
                    <label htmlFor="rePassword">Repeat Password</label>
                    <input onChange={(e)=>setRePasswrod(e.target.value)}  name="rePassword" type="password" required />
                </div>
                <div className="form-field">

                    <button className="button" type="submit">
                        Join
                    </button>
                    <div className="small">
                        Youre not new?
                        <Link to="/login">Log In</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
