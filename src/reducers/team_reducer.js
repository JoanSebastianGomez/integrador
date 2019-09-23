import { GET_TEAMS } from '../types';
export default function (state = {}, action) {
    switch (action.type) {
        case GET_TEAMS:
            return { ...state, teams: action.payload }
        default:
            return state;
    }
}

