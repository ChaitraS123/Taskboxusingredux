import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TaskItem from './TaskItem'

const TaskList = () => {
    const tasks = useSelector(state => state.tasks)


    return (
        <div>
            {tasks.length === 0 ?
                <div>
                    <h1>No tasks found</h1>
                    <p>Please add Task</p>
                </div>

                : <div>
                    <h2>No of Tasks-{tasks.length}</h2>
                    {tasks.map((task) => {
                        return <TaskItem key={task.id} id={task.id} title={task.title} body={task.body} />
                    })}
                </div>
            }


        </div>
    )
}
export default TaskList