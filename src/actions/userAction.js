import axios from 'axios'


const addtask = (task) => {
    return { type: 'ADD_TASK', payload: task }
}
export const addUsers = (task) => {

    return (dispatch) => {
        axios.post('http://localhost:3033/api/tasks', task)
            .then((response) => {
                const tasks = response.data
                dispatch(addtask(tasks))

            })
            .catch((res) => {
                console.log(res.message)
            })
    }
}

const readTasks = (task) => {
    return {
        type: "All_TASK", payload: task
    }
}

export const getTasks = () => {
    return (dispatch) => {
        axios.get('http://localhost:3033/api/tasks')
            .then((response) => {
                const result = response.data
                dispatch(readTasks(result))
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

}

const removeTask = (id) => {
    return {
        type: 'REMOVE_TASK', payload: id
    }
}

export const deleteTasks = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3033/api/tasks/${id}`)
            .then((response) => {
                const result = response.data
                dispatch(removeTask(result.id))
            })
    }
}
const updateTask = (task) => {
    return { type: 'UPDATE_TASK', payload: task }
}

export const editTasks = (task) => {

    return (dispatch) => {
        axios.put(`http://localhost:3033/api/tasks/${task.id}`, task)
            .then((response) => {
                const result = response.data
                dispatch(updateTask(result))
            })
    }

}