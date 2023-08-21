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
        <form className="flex w-72 content-start justify-between  h-7">
            <input className=" border-2 border-secondary p-1 rounded shadow-sm text-secondary outline-secondary"type="text" placeholder="To Do" name="task" value={title} onChange={handleChange} ></input>
            <button className="w-12 rounded-md shadow border-2 border-secondary" onClick={(e) => { handleClick(e) }}>Add</button>
        </form>


    )
}

export default AddTask