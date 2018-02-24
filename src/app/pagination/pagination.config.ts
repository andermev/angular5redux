import { Injectable } from '@angular/core';
import { NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class PaginationConfig {
    // tslint:disable-next-line: no-unused-variable
    constructor(private config: NgbPaginationConfig) {
        config.boundaryLinks = true;
        config.maxSize = 5;
        config.pageSize = 3;
        config.size = 'sm';
    }
}
