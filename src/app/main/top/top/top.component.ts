import { Component, OnInit } from '@angular/core';
import {TableData} from 'src/app/table-data'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  tableData: TableData[] = [{
    firstName: 'john',
    lastName: 'doe'
  },{
    firstName: 'steve',
    lastName: 'butler'
  },{
    firstName: 'ron',
    lastName: 'paul'
  },{
    firstName: 'chris',
    lastName: 'Hemp'
  },{
    firstName: 'David',
    lastName: 'kohl'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
