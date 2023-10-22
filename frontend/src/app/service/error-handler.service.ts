import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private notificationService: NotificationService, private router: Router) { }

  /** The generic error handler for all our Http requests */
  handleError(error: HttpErrorResponse, costumMessage?: string) {

    let errorMessage = 'Something went wrong.';

    // client side errors
    if (error.error instanceof ErrorEvent) {
      errorMessage = error?.error?.message;
    }
    // server side errors
    else {
      errorMessage = error?.error?.message;
    }

    this.notificationService.notify(
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      },
      costumMessage || errorMessage,
      'error',
    );

    // Redirect to login page if there was an Unauthorized status code in the response.
    if (error.status === 401) {
      this.router.navigate(['login']);
    }

    return throwError(() => errorMessage);
  }
}
