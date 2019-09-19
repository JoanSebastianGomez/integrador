import {SIGN_IN,SIGN_UP} from '../types'

export default function (state = {}, action) {

    switch (action.type) {
        case SIGN_IN:
            return {
                ...state, auth: {
                    id:action.payload.IdApostador || false,
                    token:action.payload.token || false
                }
            }
        case SIGN_UP:
            return {
                ...state, auth: {
                        id:action.payload.IdApostador || false,
                        token:action.payload.token || false
                    }
            }
        default:
            return state
    }


}