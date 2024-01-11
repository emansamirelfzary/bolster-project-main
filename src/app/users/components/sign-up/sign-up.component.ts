import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from './passwordValidator';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private _authService:AuthService, private _router:Router){}

signUpError:string='';
isLoading:boolean=false

  signUpForm: FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]),
    rePassword:new FormControl('',[Validators.required,PasswordValidator.misMatch]),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  })

get name(){
return this.signUpForm.get('name')
}
get email(){
  return this.signUpForm.get('email')
}
get password(){
  return this.signUpForm.get('password')
}
get repassword(){
  return this.signUpForm.get('rePassword')
}
get phone(){
  return this.signUpForm.get('phone')
}

handleSignUp(form:FormGroup){
  if(form.valid){
    this.isLoading=true
    this._authService.signUp(form.value).subscribe({
      next:(response)=>{
        this.isLoading=false
        if(response.message === 'success'){
          this._router.navigate(['/signin'])
        }
        console.log(response)
      },
      error:(error)=>{
        this.isLoading=false
        console.log(error)
        this.signUpError=error.error.message
      }
    })
  }
}

}
