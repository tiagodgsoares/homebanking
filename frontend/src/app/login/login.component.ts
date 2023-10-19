import { Component } from '@angular/core';
import { User } from '../model/user.interface';
import { UserService } from '../service/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _formBuilder: FormBuilder, private userService: UserService) { }

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

      this.userService.login(newUser).subscribe(({email}) => {

        this.userFormGroup.setErrors(null); //TODO not working
        this.userFormGroup.reset();
      });
    }

  }

}
