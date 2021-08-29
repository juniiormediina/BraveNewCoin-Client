import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/jwt/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      // this.roles = this.tokenService.getAuthorities();
    }
  }
}
