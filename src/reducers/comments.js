/**
 * @file
 * @author liucan10(chuck7liu@gmail.com)
 */
import {
    ADD_COMMENT,
    HIDE_COMMENT,
    DELETE_COMMENT,
    INIT_COMMENTS
} from '../actions'

export default function (state = [], action) {
    console.log(action)
    switch (action.type) {
        case INIT_COMMENTS:
            // 初始化评论
            return action.payload.comments
        case ADD_COMMENT: {
            // 新增评论
            return [...state, action.payload]
        }
        case DELETE_COMMENT: {
            let index = state.findIndex(comment => comment.id === action.payload.id)
            if (index !== -1) {
                return state
            }
            // 删除评论
            return  [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        }
        case HIDE_COMMENT: {
            let index = state.findIndex(comment => comment.id === action.payload.id)
            if (index !== -1) {
                return state
            }
            let comment = state[index]
            let newComment = {
                ...comment,
                state: 'hidden'
            }
            return [
                ...state.slice(0, index),
                newComment,
                ...state.slice(index + 1)
            ]
        }
        default:
            return state
    }
}
