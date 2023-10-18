import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.interface';
import { SERVER_ENDPOINTS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(newUser: User): Observable<User> {
    return this.http.post<User>(`${SERVER_ENDPOINTS.SUBSCRIBE_USER}`, newUser);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${SERVER_ENDPOINTS.LOGIN_USER}`, user);
  }
}
