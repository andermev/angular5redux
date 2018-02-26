import { DevicesUpdatedAction } from '../actions/device';
import { Device } from '../models/device';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import { Observable } from 'rxjs/Observable';
import { Page } from '../pagination/pagination/entities/page.entity';

@Component({
  selector: 'app-device',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceComponent implements OnInit {

    public devices$: Observable<Device[]>;
    totalItems: 5;
    page: 2;
    itemsPerPage: 3;
    previousPage: any;
    target = '/';
    page$: Observable<Page>;

    constructor(public store: Store<fromRoot.State>) {
        this.devices$ = store.select(fromRoot.getDevices);
    }

    // Dispatch the Action
    ngOnInit() {
        this.store.dispatch(new DevicesUpdatedAction({
            devices: [],
            page: {
                size: 5,
                totalElements: 5,
                totalPages: 3,
                number: 1
            }
        }));
    }

    loadPage(page: number) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.store.dispatch(new DevicesUpdatedAction({
                devices: [],
                page: {
                    size: 5,
                    totalElements: 5,
                    totalPages: 3,
                    number: 1
                }
            }));
        }
    }

}
