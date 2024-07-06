import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const id = sessionStorage.getItem('id');
  if (id) {
    return true;
  } else {
    return false;
  }
};
