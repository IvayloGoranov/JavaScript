import { NavigationStart } from '@angular/router';

import { ROUTES_CHANGE } from '../core/core.actions';
import { USER_LOGGED_IN } from '../users/users.actions';

export function config(ngRedux, router, authService){
  router.events.subscribe(ev =>
  {
    if(ev instanceof NavigationStart){
      ngRedux.dispatch({
        type: ROUTES_CHANGE
      })
    }
  });

  if(this.authService.isUserAuthenticated()){
    const token = authService.getToken();
    const username = authService.getUser();

    ngRedux.dispatch({
      type: USER_LOGGED_IN,
      result: {
        success: true,
        token,
        user: {
          name: username
        }
      }
    });
  }
}
