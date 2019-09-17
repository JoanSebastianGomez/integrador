import axios from 'axios';
import {SIGN_IN,SIGN_UP} from '../types'
export function signUp(form) {

    return {
        type: SIGN_UP,
        payload: {
            email: '',
            token: ''
        }
    }
}

export function signIn(form) {
    return {
        type: SIGN_IN,
        payload: {
            email: '',
            token: ''
        }
    }

}