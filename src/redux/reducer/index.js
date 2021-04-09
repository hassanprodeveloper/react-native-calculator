import {combineReducers} from 'redux';
import reducer_1 from './reducer_1'
import reducer_2 from './reducer_2'
// import other reducers here

export default combineReducers({
    r1: reducer_1,
    r2: reducer_2,
    // other reducers will come here
})