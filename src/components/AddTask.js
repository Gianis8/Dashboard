import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "../store/ToDoslice"

export const AddTask = () => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(addTask(title))
        setTitle("")
    }

    const handleChange = (e) => {
        e.preventDefault()
        const str1 = e.target.value
        const str2 = str1.charAt(0).toUpperCase() + str1.slice(1);
        setTitle(str2)
    }

    return (
        <form id="add-task">
            <input id="add-input" type="text" placeholder="To Do" name="task" value={title} onChange={handleChange} ></input>
            <button className="task-button" onClick={(e) => { handleClick(e) }}>ADD</button>
        </form>


    )
}

export default AddTask