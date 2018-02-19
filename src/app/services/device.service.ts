import { HttpClient } from '@angular/common/http';
import { Device } from '../models/device';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class DeviceService {
    constructor(private http: HttpClient) {}

    getDevices(): Observable<Device[]> {
        return this.http.get<any>('https://api.fixer.io/latest?base=USD').map(result => {
            return Object.keys(result.rates).map((key, index) => {
                return { name: key, model: result.rates[key], state: result.state, image: result.image };
            });
        });
    }
}
