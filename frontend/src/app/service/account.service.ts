import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../model/account.interface';
import { SERVER_ENDPOINTS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccount(id: string): Observable<Account> {
    return this.http.get<Account>(`${SERVER_ENDPOINTS.ACCOUNT}/${id}`);
  }

  addAmount(id: string, amount: number): Observable<Account> {
    return this.http.put<Account>(`${SERVER_ENDPOINTS.ACCOUNT}/${id}/add`, { amount } )
  }

  removeAmount(id: string, amount: number): Observable<Account> {
    return this.http.put<Account>(`${SERVER_ENDPOINTS.ACCOUNT}/${id}/remove`, { amount } )
  }

}
