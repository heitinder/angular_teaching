import { Component, Input, OnInit } from '@angular/core';
import { TableData } from 'src/app/table-data';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() persons: TableData[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
