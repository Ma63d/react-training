import {
    CHANGE_USERNAME
} from '../actions'

export default function (state = { username: ''}, action) {
    switch (action.type) {
        case CHANGE_USERNAME: {
            return {
                ...state,
                username: action.payload.username
            }
        }
        default:
            return state
    }
}