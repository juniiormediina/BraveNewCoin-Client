import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/jwt/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLogged = false;
  isLoginFail = false;
  login!: Login;
  username!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
      console.log(this.tokenService.getUserName());
    }
  }

  onLogin(): void {
    this.login = new Login(this.username, this.password);
    this.authService.login(this.login).subscribe(
      (data) => {
        console.log(data);
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/']);
      },
      (err) => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsj = err.error.message;
        console.log(this.errMsj);
      }
    );
  }
}
