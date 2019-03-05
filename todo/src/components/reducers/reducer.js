import {UPDATE_TITLE, MARK_TASK_COMPLETE} from '../actions'

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

        default:
            return state;
    }
}

export default reducer
