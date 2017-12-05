import { initialState, IStatsState } from './stats.state';

import { STATS_REQUEST } from './stats.actions';

export function statsReducer(state = initialState, action) {
  switch(action.type){
    case STATS_REQUEST:
      return statsRequested(state, action);
    default:
      return state;
  }
}

function statsRequested(state, action){
  const stats = action.stats;
  return Object.assign({}, state, {
    users: stats.users,
    cars: stats.cars
  });
}
