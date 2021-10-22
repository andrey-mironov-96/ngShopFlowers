import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pageSize: number = 10;
  maxPage: any;
  initialPage : number = 1;
  pageOfItems: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
