import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const setFormInfoGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  let setloginData = localStorage.getItem('loginStatus')
  const _toastr = inject(ToastrService);

  if (setloginData == 'false') {
    const confirmation = _toastr.error('Are you sure You want to back ?');
    return confirmation ? true : false
  } else {
    _toastr.success('You are Login')
    return true;
  };
};
