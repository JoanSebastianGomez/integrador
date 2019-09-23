import {combineReducers} from 'redux';
import Articles from './articles_reducer'
import User from './user_reducer'
import Teams from './team_reducer'
import Apuestas from './apuesta_reducer'
import Partidos from './partido_reducer'




const rootReducer=combineReducers({
Articles,
User,
Teams,
Apuestas,
Partidos
})
export default rootReducer;