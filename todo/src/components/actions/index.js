export const UPDATE_TITLE = 'UPDATE_TITLE';

export function updateTitle(newTitle) {
    // console.log(newTitle);

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