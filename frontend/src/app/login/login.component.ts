import { Component } from '@angular/core';
import { User } from '../model/user.interface';
import { UserService } from '../service/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

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
          alert(message);
          this.userFormGroup.setErrors(null);
          this.userFormGroup.reset();
          this.router.navigate(['overview', accountId]);
        },
        error: (error) => {
          if (error.status === 400) {
            alert(error.error.message);
          }
        }
      });

    };
  }

}
