import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerationForm : FormGroup | any;
  constructor() {
   }

  ngOnInit(): void {
    this.registerationForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null, [Validators.required,Validators.minLength(8)]),
      cpassword: new FormControl(null, [Validators.required,Validators.minLength(8)]),
      mobile: new FormControl(null, [Validators.required,Validators.minLength(10)]),
    },this.passwordMatchingValidator); 
  }
  onSubmit(){
    console.log(this.registerationForm)
  }
  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('cpassword')?.value ? null :
      { notmatched: true }
  };
get userName(){
  return this.registerationForm.get('userName') as FormControl;
}
get email(){
  return this.registerationForm.get('email') as FormControl;
}
get password(){
  return this.registerationForm.get('password') as FormControl;
}
get cpassword(){
  return this.registerationForm.get('cpassword') as FormControl;
}
get mobile(){
  return this.registerationForm.get('mobile') as FormControl;
}
}
