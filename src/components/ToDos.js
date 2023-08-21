import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import { selectTasks } from '../store/ToDoslice'
import AddTask from './AddTask'

const ToDos = () => {
    const tasks = useSelector(selectTasks)
    
    return (
        <div className='flex-col rounded-xl shadow-lg h-72 max-w-md m-4 p-4 bg-primary'>
        <AddTask></AddTask>
        <ul className="m-2">{
            tasks.map((task) => {
                return <Card task={task}></Card>
            })
        }</ul>
        </div>
    )
}

export default ToDos