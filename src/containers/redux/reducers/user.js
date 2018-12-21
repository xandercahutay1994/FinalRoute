import {
    LOGIN_USER
} from '../types'
import {createReducer} from './createReducer'

const userState = {
    islogin : false
}

const userActionsHandler = {
    LOGIN_USER: (state) => {
        return { ...state, islogin: true }
    }
}

export default createReducer(userState, userActionsHandler)