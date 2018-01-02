export interface ICarsState {
  carAdded: boolean,
  carId: number,
  allCars: Array<object>
}

export const initialState: ICarsState = {
  carAdded: false,
  carId: null,
  allCars: []
};
