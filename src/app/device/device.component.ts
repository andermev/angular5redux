import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Device } from '../models/device';
import { DevicesUpdatedAction } from '../actions/device';

import * as fromRoot from '../reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent {

    public devices$: Observable<Device[]>;

    constructor(public store: Store<fromRoot.State>) {
        this.devices$ = store.select(fromRoot.getDevices);
    }

}
