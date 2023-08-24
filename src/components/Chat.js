import React from "react";
import { useState } from "react";
import { selectAnswer, fetchChat } from "../store/OpenAiSlice";
import { useDispatch, useSelector } from "react-redux";

const Chat = () => {
    const dispatch = useDispatch()
    const [question, setQuestion] = useState('')
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

    return (
        <div>
            <input onChange={handleChange}type="text"></input>
            <button type="submit" onClick={(e)=>{handleSubmit(e)}}>Enter</button>
            <div><h3>{answer}</h3></div>
        </div>
    )

}

export default Chat