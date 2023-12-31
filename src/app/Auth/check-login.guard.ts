import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const checkLoginGuard: CanActivateFn = (route, state) => {

  let loginStatus = localStorage.getItem('loginStatus')
  let routers = inject(Router)
  const _toastr = inject(ToastrService);

  if (loginStatus == 'false') {
    _toastr.error('You are Not Login');
    routers.navigate(['login'])
    return false;
  } else {
    return true;
  };

};
