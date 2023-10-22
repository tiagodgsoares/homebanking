import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../components/notification/notification.component';
import { NotificationOptions } from '../model/notification-options.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  /**
   * Triggers a success notification.
   *
   * @param options - The notification configuration.
   * @param displayTitle - The title to display in the notification.
   * @param displayMessage - The message to display in the notification.
   * @param type - The notification type.
   * @param buttonText  - The button text.
   */
  notify(options: NotificationOptions, displayMessage: string, type: 'success' | 'error' | 'info' | 'warn', displayTitle?: string, buttonText?: string) {

    this.snackBar.openFromComponent(NotificationComponent, {
      data: {
        title: displayTitle,
        message: displayMessage,
        buttonText,
      },
      duration: options?.duration || 3000,
      horizontalPosition: options?.horizontalPosition || 'right',
      verticalPosition: options?.verticalPosition || 'top',
      panelClass: type,
    });
  }
}
