import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "../store/ToDoslice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
        <div className="flex w-72 justify-evenly h-7">
            <input className=" p-1 text-secondary border-b-2 border-primary"type="text" placeholder="To Do" name="task" value={title} onChange={handleChange} ></input>
            <FontAwesomeIcon icon={faPlus} className="text-ternary  h-5" onClick={(e) => { handleClick(e) }}>Add</FontAwesomeIcon>
        </div>


    )
}

export default AddTask