import { HttpClient } from '@angular/common/http';
import { Device } from '../models/device';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class DeviceService {
    constructor(private http: HttpClient) {}

    getDevices(): Observable<Device[]> {
        const url = 'https://api.smartenit.io:443/v2/devices/?limit=2&fields=name,model,state,hwId,media&page=1h';
        const authorization = 'Bearer ';

        return this.http.get<any>(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorization,
                    'Cache-Control': 'no-cache'
                }
            }).map(result => {
                return Object.keys(result.data).map((key, index) => {
                    return { name: key, model: result.rates[key], state: result.state, image: result.image };
            });
        });
    }
}
