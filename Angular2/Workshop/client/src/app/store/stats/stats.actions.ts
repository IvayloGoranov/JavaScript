import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { StatsService } from '../../stats/stats.service';
import { IAppState } from '../app.state';

export const STATS_REQUEST = 'stats/REQUEST';

@Injectable()
export class StatsActions {
  constructor(private statsService: StatsService,
              private ngRedux: NgRedux<IAppState>){
  }

  get(){
    return this.statsService.get()
                            .subscribe(stats => {
                              this.ngRedux.dispatch({
                                type: STATS_REQUEST,
                                stats
                              })
                            });
  }
}
