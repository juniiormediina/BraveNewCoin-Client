import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TokenService } from 'src/app/service/jwt/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isLogged = false;

  burgerChange: boolean = true;
  icon: string = 'menu';

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

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
