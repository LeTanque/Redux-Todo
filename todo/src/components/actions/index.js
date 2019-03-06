export const UPDATE_TITLE = 'UPDATE_TITLE';

export function updateTitle(newTitle) {
    return {
        type: UPDATE_TITLE,
        payload: newTitle
    }
}


export const MARK_TASK_COMPLETE = 'MARK_TASK_COMPLETE';

export function markTaskComplete(completeTask) {
    return {
        type: MARK_TASK_COMPLETE,
        payload: completeTask
    }
}

export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export function clearCompleted(clearCompleted) {
    return {
        type: CLEAR_COMPLETED,
        payload: clearCompleted
    }
}

// export const ADD_TASK = 'ADD_TASK';
// export function addTask(newTask) {
//     return {
//         type: ADD_TASK,
//         payload: newTask
//     }
// }

// Cool new cleaner way to do actions from Jordan
export const addTask = (newTask) => {
    return {
        type: 'ADD_TASK',
        payload: newTask
    }
}

export const removeTask = (id) => {
    return {
        type: 'REMOVE_TASK',
        payload: id
    }
}