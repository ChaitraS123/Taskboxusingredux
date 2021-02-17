import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTasks } from '../actions/userAction'
import EditTask from './EditTask'

const TaskItem = (props) => {
    const [toggle, setToggle] = useState(false)
    const { id, title, body } = props

    const handleToggle = () => {
        setToggle(!toggle)
    }
    const dispatch = useDispatch()

    const removeTask = (id) => {
        const confirm = window.confirm('are you sure')
        if (confirm) {
            dispatch(deleteTasks(id))

        }
    }

    return (
        <div>
            {toggle ? <div><EditTask id={id} title={title} body={body} handleToggle={handleToggle} /></div> :
                <div>
                    <h1>Title-{title}</h1>
                    <p>Body-{body}</p>
                    <button onClick={() => removeTask(id)}>remove</button>
                    <button onClick={handleToggle}>Edit Task</button>
                </div>
            }
        </div>
    )
}
export default TaskItem;