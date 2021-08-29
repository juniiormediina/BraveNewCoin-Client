import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/jwt/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLogged = false;
  userName = '';

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.userName = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.userName = '';
    }
  }
}
