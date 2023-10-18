import { Component } from '@angular/core';
import { User } from '../model/user.interface';
import { UserService } from '../service/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

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

      this.userService.register(newUser).subscribe(({email}) => {
        alert(`User ${email} created!`);
      });
    }

  }

}
