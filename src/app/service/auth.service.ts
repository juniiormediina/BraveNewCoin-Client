import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUp } from '../models/sign-up';
import { Login } from '../models/login';
import { JwtDTO } from '../models/jwt/jwt-dto';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public signup(signup: SignUp): Observable<any> {
    return this.httpClient.post<any>(`${baseURL}signup`, signup);
  }

  public login(login: Login): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(`${baseURL}login`, login);
  }
}
