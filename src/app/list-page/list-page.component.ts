import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {FormControl} from '@angular/forms';

export interface PeriodicElement {
  date: number;
  usd: string;
  eur: number;
  gbp: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {date: 1, usd: 'Hydrogen', eur: 1.0079, gbp: 'H'},
  {date: 2, usd: 'Helium', eur: 4.0026, gbp: 'He'},
  {date: 3, usd: 'Lithium', eur: 6.941, gbp: 'Li'},
  {date: 4, usd: 'Beryllium', eur: 9.0122, gbp: 'Be'},
  {date: 5, usd: 'Boron', eur: 10.811, gbp: 'B'},
  {date: 6, usd: 'Carbon', eur: 12.0107, gbp: 'C'},
  {date: 7, usd: 'Nitrogen', eur: 14.0067, gbp: 'N'},
  {date: 8, usd: 'Oxygen', eur: 15.9994, gbp: 'O'},
  {date: 9, usd: 'Fluorine', eur: 18.9984, gbp: 'F'},
  {date: 10, usd: 'Neon', eur: 20.1797, gbp: 'Ne'},
];

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  displayedColumns: string[] = ['date', 'usd', 'eur', 'gbp'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dateFrom = new FormControl();
  dateTo = new FormControl();
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  maxDayFiler = (d: Date): boolean => {
    if (!this.dateFrom.value) {
      return false;
    }
    const dateFromTimestamp = this.dateFrom.value.getTime();
    const currentDateTimestamp = d.getTime();
    return currentDateTimestamp > dateFromTimestamp && currentDateTimestamp < dateFromTimestamp + (1000 * 60 * 60 * 24 * 5);
  }

  resetDateTo(): void {
    this.dateTo.setValue(null);
  }

}
