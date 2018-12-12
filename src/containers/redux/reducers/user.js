import {
    LOGIN_USER
} from '../types'
import {createReducer} from './createReducer'

const userState = {
    isLogin : false
}

const userActionsHandler = {
    LOGIN_USER: (state) => {
        return { ...state, isLogin: true }
    }
}

export default createReducer(userState, userActionsHandler)