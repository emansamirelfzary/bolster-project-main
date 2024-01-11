import { FormControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
  static misMatch (control:FormControl): ValidationErrors |null {
    const password=control.root.get('password');
    const rePassword=control.value
    if (password && rePassword && password.value !== rePassword)
   { return {misMatch : true}}
   return null
  }
}
