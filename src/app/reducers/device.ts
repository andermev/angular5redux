import { Device } from './../models/device';
import * as device from '../actions/device';

export function reducer(state = [], action: device.DevicesUpdatedAction) {
    switch (action.type) {
        case device.DEVICESUPDATED:
            return action.payload;
        default:
            return state;
    }
}
