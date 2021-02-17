import React from 'react'
import TaskForm from './TaskForm'
import { editTasks } from '../actions/userAction'
import { useDispatch } from 'react-redux'
const EditTask = (props) => {
    const { id, title, body, handleToggle } = props
    const dispatch = useDispatch()
    const addItem = (task) => {
        dispatch(editTasks(task))
        handleToggle()
    }


    return (
        <div>
            {/* <p>Edit Task</p>
            <h2>title-{title}</h2>
            <p>body-{body}</p> */}
            <h2>Edit Item</h2>
            <TaskForm id={id} title={title} body={body} addItem={addItem} />

        </div>
    )
}
export default EditTask