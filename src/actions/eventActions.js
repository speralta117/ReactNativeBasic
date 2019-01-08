import * as types from './actionTypes';

export function loadEventsSuccess(events) {
    return { type: types.LOAD_EVENTS_SUCCESS, events }
}

export function startCountdown(events) {
    return { type: types.START_EVENTS_COUNTDOWN, events}
}

export function loadEvents() {
    return function(dispatch) {
        const events = require('../../data/db.json').events.map(e => ({
            ...e,
            date: new Date(e.date)
        })); 
        dispatch(loadEventsSuccess(events));
    }
}