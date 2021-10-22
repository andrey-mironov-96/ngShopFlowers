import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../models/product';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pageOfItems: Array<any> = [];

  @Input() items: IProduct[] = [];
  constructor() { }

  ngOnInit(): void {
    
    
  }
 
}
