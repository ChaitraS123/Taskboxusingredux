import React from 'react'
import TaskList from './TaskList'
import { useSelector, useDipatch } from 'react-redux'
import AddTask from './AddTask'

function TaskContainer() {
    const tasks = useSelector(state => state.tasks)


    return (
        <div>
            <AddTask />
            <TaskList />

        </div>
    )

}
export default TaskContainer