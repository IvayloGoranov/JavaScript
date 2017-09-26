import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Profile } from './Profile';
import { Repo } from './Repo';

const profileUrl: string = 'https://api.github.com/users/';

@Injectable()
export class Data {
  constructor (private http: Http) {
  }

  getProfile (username: string) : Promise<Profile> {
    return this.http
      .get(profileUrl + username)
      .toPromise()
      .then(resp => resp.json() as Profile)
      .catch(err => {
        console.log(err);
        return {}
      });
  }

  getRepos (username: string) : Promise<Array<Repo>> {
    return this.http
      .get(profileUrl + username + '/repos')
      .toPromise()
      .then(resp => resp.json() as Repo[])
      .catch(err => {
        console.log(err);
        return []
      });
  }
}
