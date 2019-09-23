import {combineReducers} from 'redux';
import Articles from './articles_reducer'
import User from './user_reducer'
import Teams from './team_reducer'


const rootReducer=combineReducers({
Articles,
User,
Teams
})
export default rootReducer;