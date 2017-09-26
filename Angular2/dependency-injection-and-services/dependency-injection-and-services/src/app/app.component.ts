import { Component } from '@angular/core';

import { Profile } from '../data/Profile';
import {Data} from '../data/Data';
import { Repo } from '../data/Repo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private profile: Profile;
  private repos: Repo[]

  constructor(private data: Data){
  }

  public username: string;

  public showProfileInfo() : void {
    this.repos = undefined;
    this.data.getProfile(this.username).then((data) => {
      this.profile = data;
    });
  }

  public showRepos() : void {
    this.profile = undefined;
    this.data.getRepos(this.username).then((data) => {
      this.repos = data;
    });
  }
}
