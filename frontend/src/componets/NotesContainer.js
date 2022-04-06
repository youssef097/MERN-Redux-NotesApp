import React, { useEffect,useState } from 'react'
import NoteComponent from './NoteComponent'
import { useSelector, useDispatch} from "react-redux"
import { listTodos,toggleForm } from "../actions"
import NoteFormComponent from './NoteFormCompoenent'
export default function NotesContainer(props) {

    
    
    const todos = useSelector(state => state.todos)
    const { data, loading, error } = todos

    const saveTodo  = useSelector(state => state.saveTodo)
    const { success:saveSuccess, loading:saveLoading, error:saveError } = saveTodo

    const ToggleForm = useSelector(state=>state.toggleForm)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listTodos())
        if(saveSuccess){
            dispatch(toggleForm(false))
        }
    }, [saveSuccess])

    return (
        <div className="notes-container">
            {loading ? "loading..." : error ? "Error" : data && data.map(todo => {
                return <NoteComponent key={todo._id} data={todo} />
            })}
            {ToggleForm&& <NoteFormComponent/>}

        </div>
    )
}
