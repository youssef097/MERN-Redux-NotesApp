import React from 'react'
import {useDispatch} from "react-redux"
import {toggleForm} from "../actions"

export default function FilterComponent() {    
    
    const dispatch = useDispatch()

    const openFormModal = (e) => {
        e.preventDefault();
        dispatch(toggleForm())
    }


    return (
        <div className="nav-container">
            <div className="filter">

                <a href="">All</a>
                <a href="">Sports</a>
                <a href="">Expresive</a>
                <a href="" className="active">Ocupational</a>

            </div>
            <div className="add-note-container">
              <button href="#" onClick={(e)=>openFormModal(e)}> &#x2B; Add new note</button> 
            </div>
        </div>
    )
}
