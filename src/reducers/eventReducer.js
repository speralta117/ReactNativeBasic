import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function eventReducer(state = initialState.events, action) {
    switch(action.type) {
        case types.LOAD_EVENTS_SUCCESS:
            return action.events;
        case types.START_EVENTS_COUNTDOWN: 
            return  Object.assign([], action.events)          
        default: 
            return state;
    }
}