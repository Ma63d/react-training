/**
 * @file
 * @author liucan10(chuck7liu@gmail.com)
 */
import { normalizeTime } from '../utils'


let UUID = 0

export const INIT_COMMENTS = 'INIT_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const HIDE_COMMENT = 'HIDE_COMMENT'
export const UNDO_COMMENT = 'UNDO_COMMENT'
export const REDO_COMMENT = 'REDO_COMMENT'

export const CHANGE_USERNAME = 'CHANGE_USERNAME'

export const initComments = (comments) => {
    UUID = Math.max.apply(Math, comments.map(comment => comment.id))
    return {
        type: INIT_COMMENTS,
        payload: {
            comments
        }
    }
}

export const addComment = (username, content) => ({
    type: ADD_COMMENT,
    payload: {
        id: ++UUID,
        username,
        content,
        date: normalizeTime(new Date()),
        state: 'show'
    }
})

export const deleteComment = (id) => ({
    type: DELETE_COMMENT,
    payload: {
        id
    }
})

export const hideComment = (id) => ({
    type: HIDE_COMMENT,
    payload: {
        id
    }
})

export const undoComment = (id) => ({
    type: UNDO_COMMENT,
    payload: {
        id
    }
})

export const redoComment = (id) => ({
    type: REDO_COMMENT,
    payload: {
        id
    }
})

export const changeUsername = (username) => ({
    type: CHANGE_USERNAME,
    payload: {
        username
    }
})
