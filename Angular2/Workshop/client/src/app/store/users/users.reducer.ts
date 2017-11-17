import { initialState, IUsersState } from './users.state';
import { USER_REGISTERED } from './users.actions';
import { USER_LOGGED_IN } from './users.actions';

export function usersReducer(state = initialState, action) {
  switch(action.type){
    case USER_REGISTERED:
      return registerUser(state, action);
    case USER_LOGGED_IN:
      return loginUser(state, action);
    default:
      return state;
  }
}

function registerUser(state, action) {
  const result = action.result;

  return Object.assign({}, state, {
    userRegistered: result.success
  });
}

function loginUser(state, action) {
  const result = action.result;
  if(result.success){
    return Object.assign({}, state, {
      userRegistered: result.success
    });
  }else{

  }


}
