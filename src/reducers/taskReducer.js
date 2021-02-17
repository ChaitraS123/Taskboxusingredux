const usersInitialState = []
const taskReducer = (state = usersInitialState, action) => {
    switch (action.type) {
        case 'ADD_TASK': {
            return [...state, action.payload]
        }
        case 'ALL_TASKS': {
            return [...action.payload]
        }
        case 'REMOVE_TASK': {
            return state.filter((task) => {
                return task.id !== action.payload
            })
        }
        case 'UPDATE_TASK': {
            return state.map((task) => {
                if (task.id === action.payload.id) {
                    return { ...task, ...action.payload }
                }
                else {
                    return { ...state }
                }
            })

        }

        default: {
            return [...state]
        }
    }

}
export default taskReducer