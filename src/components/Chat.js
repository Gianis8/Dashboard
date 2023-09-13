import React, { useEffect } from "react";
import { useState } from "react";
import { selectAnswer, fetchChat, selectLoading } from "../store/OpenAiSlice";
import { useDispatch, useSelector } from "react-redux";

const Chat = () => {
    const dispatch = useDispatch()
    const [question, setQuestion] = useState('')
    
    const loading = useSelector(selectLoading)
    const answer = useSelector(selectAnswer)

    

    const handleChange = (e) =>{
        e.preventDefault()
        console.log(e.target.value)
        setQuestion(e.target.value)
    }

    const handleSubmit = () => {
        console.log('submitting...')
        console.log(question)
        dispatch(fetchChat(question))
    }

    console.log("Answer useStae:", answer)

    return (
        <div className="border-2 rounded-xl m-4 p-2 shadow-md">
            <input className=" p-1 border-b-2 border-primary" onChange={handleChange}type="text"></input>
            <button type="submit" onClick={(e)=>{handleSubmit(e)}}>Enter</button>
            <div><h3>{answer}</h3></div>
        </div>
    )

}

export default Chat