import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CoinsComponent implements OnInit {
  links = [
    { path: 'currencyChanges', label: 'REALIZAR CAMBIO' },
    { path: 'listCurrencies', label: 'LISTA DE MONEDAS' },
  ];
  activeLink = this.links[0];

  constructor() {}

  ngOnInit(): void {}
}
