import { DevicesUpdatedAction } from '../actions/device';
import { Device } from '../models/device';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceComponent implements OnInit {

    public devices$: Observable<Device[]>;

    constructor(public store: Store<fromRoot.State>) {
        this.devices$ = store.select(fromRoot.getDevices);
        this.devices$.subscribe(console.log);
    }

    // Dispatch the Action
    ngOnInit() {
        this.store.dispatch(new DevicesUpdatedAction([]));
    }

}
