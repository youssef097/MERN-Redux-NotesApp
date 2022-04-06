import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from "../actions"
import {useSelector} from "react-redux"
export default function NoteFormComponent(props) {
    const userSignIn = useSelector(state=>state.userSignIn)
    const token = userSignIn.userInfo.token
    const dispatch = useDispatch()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [type, setType] = useState("ocupational")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(token,{title, description, type}))
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="note">
            <ul className="note-content">
                <li >
                    <label htmlFor="title">Title:</label>
                </li>
                <li>
                    <input required value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                </li>
                <li >
                    <label htmlFor="desc">Description:</label>
                </li>
                <li>
                    <textarea required value={description} onChange={(e) => setDescription(e.target.value)} name="desc" maxLength="300" cols="30" rows="10"></textarea>
                </li>
                <li >
                    <label htmlFor="desc">Type:</label>
                    <select onChange={(e)=>setType(e.target.value)}>
                        <option value="ocupational">Ocupational</option>
                        <option value="sport">Sport</option>
                        <option value="expressive">Expressive</option>
                        <option value="mental">Mental</option>
                    </select>
                </li>
                
                <li>
                    <button type="submit">Save</button>
                </li>
            </ul>
        </form>
    )
}
