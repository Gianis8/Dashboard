import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks:[]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTask(state,action) {
            state.tasks.push(action.payload)
        },
        deleteTask(state,action){
            const idx = state.tasks.indexOf(action.payload)
            state.tasks.splice(idx,1)
        }
    },
})

export const selectTasks = (state) =>{
    return state.todo.tasks
}

const {actions } = todoSlice
export const { addTask } = actions
export const { deleteTask} = actions

export default todoSlice.reducer