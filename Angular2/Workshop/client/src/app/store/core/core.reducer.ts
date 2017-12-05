import { initialState, ICoreState } from './core.state';

import { ROUTES_CHANGE } from './core.actions';

export function coreReducer(state = initialState, action) {
  if(action.type === ROUTES_CHANGE){
    return routeChange(state, action);
  } else {
    return handleMessage(state, action);
  }
}

function handleMessage(state, action) {
  const result = action.result;
  if(result){
    const message = result.message;
    return Object.assign({}, state, {
      message
    });
  }

  return state;
}
function routeChange(state, action) {
  return Object.assign({}, state, {
    message: null
  });
}

