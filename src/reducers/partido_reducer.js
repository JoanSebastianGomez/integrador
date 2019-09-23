import { GET_PARTIDOS } from '../types';
export default function (state = {}, action) {
    switch (action.type) {
        case GET_PARTIDOS:
            return { ...state, partidos: action.payload }
        default:
            return state;
    }
}

