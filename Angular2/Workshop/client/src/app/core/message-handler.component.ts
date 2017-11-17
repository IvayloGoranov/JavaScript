import { Component, OnInit } from '@angular/core';
import {NgRedux} from "ng2-redux";
import {IAppState} from "../store/app.state";

@Component({
  selector: 'message-handler',
  templateUrl: `
    <div>
        {{message}}
    </div>
  `
})
export class MessageHandlerComponent implements OnInit{
  message: string;

  constructor(private ngRedux: NgRedux<IAppState>){

  }

  ngOnInit(){
    this.ngRedux.select(state => state.core.message)
                .subscribe(message => this.message = message);
  }
}
