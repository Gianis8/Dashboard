import React, { useEffect } from "react";
import { useState } from "react";
import { selectAnswer, fetchChat, selectLoading, fetchTurbo } from "../store/OpenAiSlice";
import { useDispatch, useSelector } from "react-redux";

const Chat = () => {
    const dispatch = useDispatch()
    const [question, setQuestion] = useState('')
    
    const loading = useSelector(selectLoading)
    let answer = useSelector(selectAnswer)

    useEffect(()=>{
        
    },[loading, answer])
    

    const handleChange = (e) =>{
        e.preventDefault()
        setQuestion(e.target.value)
    }

    const handleSubmit = () => {
        console.log('submitting...')
        console.log(question)
        dispatch(fetchChat(question))
    }
    // console.log(loading)
    // console.log("Answer useState:", answer)

    return (
        <div className=" flex flex-col border-2 rounded-xl m-4 p-2 shadow-md w-72">
            <input className=" p-1 border-b-2 border-primary" onChange={handleChange}type="text"></input>
            <button type="submit" onClick={(e)=>{handleSubmit(e)}}>Enter</button>
            <div className="h-56">{loading ? <p>loading</p> : <h3>{`${answer}`}</h3>}</div>
        </div>
    )

}

export default Chat