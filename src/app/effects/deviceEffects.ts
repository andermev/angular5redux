import { DevicesUpdatedAction } from '../actions/device';
import { DeviceService } from '../services/device.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

import * as device from '../actions/device';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class DeviceEffects {
    @Effect()
    read$: Observable<Action> = this.actions$
        .switchMap(() =>
            this.deviceService
                .getDevices(2, 1)
                .map(data => new DevicesUpdatedAction(
                    {
                        devices: data,
                        page: {
                            size: 5,
                            totalElements: 5,
                            totalPages: 3,
                            number: 1
                        }
                    }))
        );

    constructor(
        private deviceService: DeviceService,
        private actions$: Actions
    ) {}
}
