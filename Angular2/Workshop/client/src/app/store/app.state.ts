import { IUsersState } from './users/users.state';
import { ICoreState } from './core/core.state';
import {IStatsState} from './stats/stats.state';

export interface IAppState {
  core: ICoreState,
  users: IUsersState,
  stats: IStatsState
}
