import { Device } from '../models/device';
import { Action } from '@ngrx/store';
import { ResponseService } from '../models/response';

export const DEVICESUPDATED = '[Device] UpdatedAll';

export class DevicesUpdatedAction implements Action {
    type = DEVICESUPDATED;

    constructor(public payload: ResponseService) {}
}
