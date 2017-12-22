export interface ICarsState {
  carAdded: boolean,
  carId: number
}

export const initialState: ICarsState = {
  carAdded: false,
  carId: null
};
