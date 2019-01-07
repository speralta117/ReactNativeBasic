import * as types from './actionTypes';

export function loadEventsSuccess(events) {
    return { type: types.LOAD_EVENTS_SUCCESS, events }
}

// export function loadEvents() {
//     return function(dispatch) {
//         debugger;
       
//     }
// }