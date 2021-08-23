import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-changes',
  templateUrl: './currency-changes.component.html',
  styleUrls: ['./currency-changes.component.scss'],
})
export class CurrencyChangesComponent implements OnInit {
  assets: any[] | undefined;

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    console.log('its work');
  }
}
