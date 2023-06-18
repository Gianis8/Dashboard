import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../store/ToDoslice";

const Card = (props) => {
    console.log(props)
    const dispatch = useDispatch()
    const [done, setDone] = useState('card')

    console.log("done:" + done)

    const handleDelete = () => {
        dispatch(deleteTask(props.task))
    }

    const handleDone = () => {
        setDone('card-done')
    }

    

    return (
        <div className={done} style={{ display: "flex" }}>
            <h1 style={{ alignSelf: "center" }}>{props.task}</h1>
            <button style={{ alignSelf: "center" }}onClick={handleDone}>Done</button>
            <button style={{ alignSelf: "center", width: "100px" }} onClick={handleDelete}>DELETE</button>
        </div>
    )
}


export default Card