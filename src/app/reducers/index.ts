import { Device } from '../models/device';
import * as fromDevice from './device';

export interface State {
    devices: Device[];
}

export const reducers = {
    devices: fromDevice.reducer
};

export const getDevices = (state: State) => state.devices;
