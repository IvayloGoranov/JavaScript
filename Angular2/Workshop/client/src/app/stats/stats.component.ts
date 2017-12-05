import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { StatsActions } from '../store/stats/stats.actions';
import { Stats } from './stats.model';
import { IAppState } from '../store/app.state';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html'
})
export class StatsComponent implements OnInit{
  private stats: Stats = new Stats(0, 0);

  constructor(private statsActions: StatsActions,
              private ngRedux: NgRedux<IAppState>){
  }

  ngOnInit(){
    this.statsActions.get();
    this.ngRedux.select(state => state.stats).subscribe(stats => this.stats = stats);
  }
}
