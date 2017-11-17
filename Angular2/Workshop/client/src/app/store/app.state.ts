import { IUsersState } from './users/users.state';
import { ICoreState } from './core/core.state';

export interface IAppState {
  core: ICoreState,
  users: IUsersState
}
