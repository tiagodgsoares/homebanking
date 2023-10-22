import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Account } from '../model/account.interface';
import { SERVER_ENDPOINTS } from '../constants';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  getAccount(id: string): Observable<Account> {
    return this.http.get<Account>(`${SERVER_ENDPOINTS.ACCOUNT}/${id}`, { headers: new HttpHeaders({ 'Authorization': (localStorage.getItem('accessToken') || '') }) })
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }

  addAmount(id: string, amount: number): Observable<Account> {
    return this.http.put<Account>(`${SERVER_ENDPOINTS.ACCOUNT}/${id}/add`, { amount }, { headers: new HttpHeaders({ 'Authorization': (localStorage.getItem('accessToken') || '') }) })
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));

  }

  removeAmount(id: string, amount: number): Observable<Account> {
    return this.http.put<Account>(`${SERVER_ENDPOINTS.ACCOUNT}/${id}/remove`, { amount }, { headers: new HttpHeaders({ 'Authorization': (localStorage.getItem('accessToken') || '') }) })
      .pipe(catchError((error) => this.errorHandlerService.handleError(error)));
  }

}
