import React, { useState } from 'react'
import TaskForm from './TaskForm'
import { addUsers } from '../actions/userAction'
import { useDispatch } from 'react-redux'

const AddTask = () => {
    const [isSaved, setIsSaved] = useState(false)
    const dispatch = useDispatch()
    const toggleisSaved = () => {
        setIsSaved(false)
    }

    const addItem = (data) => {
        dispatch(addUsers(data))
        setIsSaved(true)

    }
    return (
        <div>

            <h1>Add Task</h1>
            <TaskForm addItem={addItem} isSaved={isSaved} toggleisSaved={toggleisSaved} />

        </div>)
}
export default AddTask