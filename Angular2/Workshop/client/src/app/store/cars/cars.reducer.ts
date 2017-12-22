import { initialState, ICarsState } from './cars.state';

import { ADD_CAR } from './cars.actions';

export function carsReducer(state = initialState, action) {
  switch(action.type){
    case ADD_CAR:
      return addCar(state, action);
    default:
      return state;
  }
}

function addCar(state, action){
  const result = action.result;

  return Object.assign({}, state, {
    carAdded: result.success,
    carId: result.success ? result.carId : null
  });
}
