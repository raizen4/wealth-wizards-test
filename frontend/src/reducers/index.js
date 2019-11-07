import { combineReducers } from 'redux'
import mainReducer from './allReducers'

const allReducers = () => combineReducers({
    currentState: mainReducer,
})

export default allReducers()