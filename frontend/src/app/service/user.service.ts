import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { User } from '../model/user.interface';
import { SERVER_ENDPOINTS } from '../constants';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  register(newUser: User): Observable<any> {
    return this.http.post<Object>(`${SERVER_ENDPOINTS.SUBSCRIBE_USER}`, newUser)
      .pipe(map(this.storeAccessToken), catchError((error) => this.errorHandlerService.handleError(error)));
  }

  login(user: User): Observable<any> {
    return this.http.post<Object>(`${SERVER_ENDPOINTS.LOGIN_USER}`, user)
      .pipe(map(this.storeAccessToken), catchError((error) => this.errorHandlerService.handleError(error)));
  }

  private storeAccessToken(response: any) {
    localStorage.setItem('accessToken', response.accessToken);
    return response;
  }
}
