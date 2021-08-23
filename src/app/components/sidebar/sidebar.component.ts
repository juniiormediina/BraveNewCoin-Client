import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  burgerChange: boolean = true;
  icon: string = 'menu';

  constructor() {}

  ngOnInit(): void {}

  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  toggle() {
    this.burgerChange = !this.burgerChange;
    if (this.burgerChange) {
      this.open.emit(null);
      this.icon = 'menu';
      console.log(this.icon);
    } else {
      this.close.emit(null);
      this.icon = 'close';
      console.log(this.icon);
    }
  }
}
