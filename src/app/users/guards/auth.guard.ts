import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let _router=inject(Router)
  if(localStorage.getItem('userToken')){
    return true;
  }
  else{
  _router.navigate(['/signin']);
    return false

  }
};
