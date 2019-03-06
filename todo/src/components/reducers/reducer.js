import {UPDATE_TITLE, MARK_TASK_COMPLETE, CLEAR_COMPLETED, ADD_TASK} from '../actions'

const initialState = {
    title: 'Todo List',
    todoList: [
        {
            id: 0,
            todoItem: 'first task',
            completed: false
        },
        {
            id: 1,
            todoItem: 'second task',
            completed: false
        }
    ]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TITLE:
            return {
                ...state,
                title: action.payload
            }
        
        case MARK_TASK_COMPLETE:
            return {
                ...state,
                todoList: state.todoList.map(task => {
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    }
                    return task
                })
            }

        case CLEAR_COMPLETED:
        console.log(state)
            return {
                ...state,
                todoList: state.todoList.filter(task => {
                    if (!task.completed) {
                        return {
                            ...task,
                        }
                    }
                })
            }

        case ADD_TASK:
            return {
                ...state
            }

        default:
            return state;
    }
}

export default reducer
