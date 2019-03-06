// These exports are paired with the functions
// The reducer uses these export const names for importing, if you don't want
// to type a string as the case name....
// I don't really see the point. It make writing a redux app lengthier and doesn't do
// much in the way of data integrity. I think I, like most other devs, just would copy/paste
// the const name, so you're not really avoiding typos or whatever (one argument)
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