import {UPDATE_TITLE, MARK_TASK_COMPLETE, CLEAR_COMPLETED} from '../actions'

const initialState = {
    title: 'Todo List',
    todoList: [
        {
            id: 0,
            todoItem: 'Sample Task (click, then clear)',
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
            return {
                ...state,
                todoList: state.todoList.filter(task => {
                    if (!task.completed) {
                        return {
                            ...task,
                        }
                    }
                    return !task
                })
            }

        case "ADD_TASK":
            const newTodo = {
                id: Date.now(),
                todoItem: action.payload,
                completed: false
            }
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    newTodo
                ]
            }

        default:
            return state;
    }
}

export default reducer
