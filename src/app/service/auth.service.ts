import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUp } from '../models/sign-up';
import { Login } from '../models/login';
import { JwtDTO } from '../models/jwt/jwt-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) {}

  public nuevo(signup: SignUp): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}signup`, signup);
  }

  public login(login: Login): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(`${this.baseURL}login`, login);
  }
}
