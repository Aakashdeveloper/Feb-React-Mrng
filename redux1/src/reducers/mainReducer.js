import {combineReducers} from 'redux';
import films from './filmReducer';

const rootReducer = combineReducers({
    films
})

export default rootReducer