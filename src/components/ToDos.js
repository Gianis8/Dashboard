import React from 'react'
import Card from './Card'
import "../App.css"
import { useSelector } from 'react-redux'
import { selectTasks } from '../store/ToDoslice'
import AddTask from './AddTask'

const ToDos = () => {
    const tasks = useSelector(selectTasks)
    
    return (
        <div id='ToDos-widget'>
        <AddTask></AddTask>
        <ul >{
            tasks.map((task) => {
                return <Card task={task}></Card>
            })
        }</ul>
        </div>
    )
}

export default ToDos