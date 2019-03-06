// You don't even need this if you use the new action syntax
import { UPDATE_TITLE, MARK_TASK_COMPLETE, CLEAR_COMPLETED } from '../actions'


const initialState = {
    title: 'Todo List',
    todoList: []
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

        case "ADD_TASK": // Maka the new task
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

        case 'REMOVE_TASK': // This reducer creates a new array with the correct filtered from payload tasks
            const newTodoListArr = state.todoList.filter(task => {
                return task.id !== action.payload
            })
            return {
                ...state,
                todoList: newTodoListArr
                    
            }

        default:
            return state;
    }
}

export default reducer
