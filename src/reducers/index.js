/**
 * @file
 * @author liucan10(chuck7liu@gmail.com)
 */
import { combineReducers } from 'redux'
import comments from './comments'
import user from './user'

export default combineReducers({
    comments,
    user
})