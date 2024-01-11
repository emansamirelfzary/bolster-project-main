import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

constructor(private _authService:AuthService, private _router:Router){}

isLoading:boolean=false;
signInError:string=''

signInForm:FormGroup=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required])
})

get email(){
  return this.signInForm.get('email')
}
get password(){
  return this.signInForm.get('password')
}

handleSignIn(form:FormGroup){
  if(form.valid){
  this.isLoading=true
  this._authService.signIn(form.value).subscribe({
    next:(response)=>{
      this.isLoading=false
      if(response.message === 'success'){
        localStorage.setItem('userToken',response.token)
        this._authService.getUserData()
        this._router.navigate(['/home']);
      }
      console.log(response)
    },
    error:(error)=>{
      this.isLoading=false
      this.signInError=error.error.message
      console.log(error.error.message)
    }
  })
  }
}
}
