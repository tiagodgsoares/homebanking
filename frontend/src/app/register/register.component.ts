import { Component } from '@angular/core';
import { User } from '../model/user.interface';
import { UserService } from '../service/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  userFormGroup = this._formBuilder.group({
    emailCtrl: ['', [Validators.required, Validators.email]],
    passwordCtrl: ['', [Validators.required, Validators.maxLength(10)]]
  });
  isLinear = false;

  handleSubmit() {
    if (this.userFormGroup.valid) {
      const newUser: User = {
        email: '',
        password: ''
      }
      newUser.email = this.userFormGroup.value.emailCtrl ? this.userFormGroup.value.emailCtrl : '';
      newUser.password = this.userFormGroup.value.passwordCtrl ? this.userFormGroup.value.passwordCtrl : '';

      this.userService.register(newUser).subscribe(({message, accountId}) => {
        alert(message);
        this.userFormGroup.setErrors(null);
        this.userFormGroup.reset();
        this.router.navigate(['overview', accountId]);
      });
    }

  }

}
