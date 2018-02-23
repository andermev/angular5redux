import { Component } from '@angular/core';

import { Pagination } from '../models/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  pagination: Pagination[] = [
    new Pagination(2, 1, 0, 0)
  ];
}
