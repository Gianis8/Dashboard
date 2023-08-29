import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import { selectTasks } from '../store/ToDoslice'
import AddTask from './AddTask'

const ToDos = () => {
    const tasks = useSelector(selectTasks)

    return (
        <div className='flex flex-col  rounded-xl shadow-lg w-1/3 m-4 p-4 bg-primary border-2 items-center'>
            <AddTask></AddTask>
            <ul className="m-2 w-full border-2">{
                tasks.map((task) => {
                    return <Card task={task}></Card>
                })
            }</ul>
        </div>
    )
}

export default ToDos