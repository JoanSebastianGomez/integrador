import {GET_APUESTAS} from '../types';
export default function (state ={},action){
    switch(action.type){
        case GET_APUESTAS:
            return {...state,
                apuestas:action.payload};
        default:
            return state;
    }
}