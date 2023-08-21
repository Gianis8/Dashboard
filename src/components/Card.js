import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../store/ToDoslice";

const Card = (props) => {
    console.log(props)
    const dispatch = useDispatch()
    const [done, setDone] = useState(false)
    const [btn, setBtn] = useState('btn')


    const handleDelete = () => {
        dispatch(deleteTask(props.task))
    }

    const handleDone = () => {
        if(done===false) {
        setDone(true)
        setBtn('btn-done')
        } else if(done===true) {
        setDone(false)
        setBtn("btn")
        }
    }



    return (
        <div className={btn} >
            <div className="grow relative">
                <h1 className="my-2 w-32">{props.task}</h1>
            </div>
            <button className="my-1px p-1 px-3 border-2 rounded hover:bg-green-500"onClick={handleDone}>{done ? "Undo" : "Done"}</button>
            <button className="my-1px mx-2 p-1 px-3 border-2 rounded"onClick={handleDelete}>Delete</button>
        </div>
    )
}


export default Card