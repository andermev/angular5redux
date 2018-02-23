import { DevicesUpdatedAction } from '../actions/device';
import { Device } from '../models/device';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-device',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceComponent implements OnInit {

    public devices$: Observable<Device[]>;

    constructor(public store: Store<fromRoot.State>) {
        if (!this.devices$) {
            this.devices$ = store.select(fromRoot.getDevices);
        }
    }

    // Dispatch the Action
    ngOnInit() {
        this.store.dispatch(new DevicesUpdatedAction([]));
    }

}
