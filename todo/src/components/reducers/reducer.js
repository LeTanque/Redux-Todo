import {UPDATE_TITLE} from '../actions'

const initialState = {
    title: 'Todo List',
}

function reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case UPDATE_TITLE:
            return {
                ...state,
                title: action.payload
            }
        default:
            return state;
    }
}

export default reducer
