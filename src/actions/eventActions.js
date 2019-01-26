import * as types from './actionTypes';
import { getEvents } from '../api/api'

export function loadEventsSuccess(events) {
    return { type: types.LOAD_EVENTS_SUCCESS, events }
}

export function startCountdown(events) {
    return { type: types.START_EVENTS_COUNTDOWN, events}
}

export function addEventSuccess(event) {
    return { type: types.ADD_EVENT_SUCCESS, event }
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

export function addEvent(event){
    return function(dispatch) {

        dispatch(addEventSuccess(event));
    }
}