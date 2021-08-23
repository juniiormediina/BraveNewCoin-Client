import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-currencies',
  templateUrl: './list-currencies.component.html',
  styleUrls: ['./list-currencies.component.scss'],
})
export class ListCurrenciesComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Price', 'Crypto', 'Convert'];
  dataSource: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
