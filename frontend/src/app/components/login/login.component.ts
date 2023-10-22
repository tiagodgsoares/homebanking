import { Component } from '@angular/core';
import { User } from '../../model/user.interface';
import { UserService } from '../../service/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _formBuilder: FormBuilder, private userService: UserService, private router: Router, private notificationService: NotificationService) { }

  userFormGroup = this._formBuilder.group({
    emailCtrl: ['', [Validators.required, Validators.email]],
    passwordCtrl: ['', [Validators.required, Validators.maxLength(10)]]
  });
  isLinear = false;

  handleSubmit() {
    if (this.userFormGroup.valid) {
      const user: User = {
        email: '',
        password: ''
      }
      user.email = this.userFormGroup.value.emailCtrl ? this.userFormGroup.value.emailCtrl : '';
      user.password = this.userFormGroup.value.passwordCtrl ? this.userFormGroup.value.passwordCtrl : '';

      this.userService.login(user).subscribe({
        next: ({ message, accountId }) => {
          this.notificationService.notify(
            {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
            },
            message,
            'success',
          );
          this.userFormGroup.setErrors(null);
          this.userFormGroup.reset();
          this.router.navigate(['overview', accountId]);
        },
        error: (error) => {
          if (error.status === 400) {
            this.notificationService.notify(
              {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
              },
              error.error.message,
              'error',
            );
          }
        }
      });

    };
  }

}
