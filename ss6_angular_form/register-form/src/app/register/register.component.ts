import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {email: '', password: ''};
  @Output() userSubmit = new EventEmitter();
  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pwGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required])
      }, [this.comparePassword]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(18), Validators.required]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
    });
  }

  comparePassword(control: AbstractControl) {
    const password = control.value;
    return (password.password === password.confirmPassword) ? null : {passwordNotMatch: true};
  }

  ngOnInit(): void {
  }

  createUser() {
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      this.userSubmit.emit(this.registerForm.value);
    }
  }

}
