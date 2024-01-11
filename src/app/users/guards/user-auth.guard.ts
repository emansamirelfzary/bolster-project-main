import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const userAuthGuard: CanActivateFn = (route, state) => {
  let _router= inject (Router)
  if(localStorage.getItem('userToken')){
_router.navigate(['/home'])
  return false;}
  else{

    return true;
  }
};
