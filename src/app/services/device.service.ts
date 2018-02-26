import { HttpClient } from '@angular/common/http';
import { Device, DeviceResult } from '../models/device';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ResponseService } from '../models/response';

@Injectable()
export class DeviceService {
    constructor(private http: HttpClient) {}

    getDevices(limit: number, page: number = 1): Observable<ResponseService> {
        const limitParam = limit ? limit : 2;
        const pageParam = page ? page : 1;
        const url = 'https://api.smartenit.io:443/v2/devices/?limit=' + limitParam + '&fields=name,model,state,hwId,media&page=' + pageParam;
        const authorization = 'Bearer H6Gr8SokqxjNnux90XxvyqjxXJNCePbJSAKUmPVDnWci8wQn5bKvRBtH2gTgANPzkSfigUYBzMb2GvFTtuyXiOxU04XkTNnBOCefznm0csmywmGPKKXKGtSct3Spp9UF';

        return this.http.get<any>(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorization,
                    'Cache-Control': 'no-cache'
                }
            })
            .map(result => (
                {
                devices: () => {
                    return Object.keys(result.data).map((key, index) => {
                        return {
                            hwId: result.data[index].hwId,
                            name: result.data[index].name,
                            state: result.data[index].state,
                            img: result.data[index].media.img
                        };
                    });
                },
                page: {
                    size: 5,
                    totalElements: 5,
                    totalPages: 2,
                    number: 1
                }
            }));
    }
}
