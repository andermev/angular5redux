import { ActionReducer, Action } from '@ngrx/store';
import * as deviceAction from '../actions/device';

export function reducer(state = [], action: deviceAction.DevicesUpdatedAction) {
    switch (action.type) {
        case deviceAction.DEVICESUPDATED:
            return action.payload;
        default:
            return state;
    }
}
