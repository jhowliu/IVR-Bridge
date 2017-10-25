import { Injectable } from '@angular/core';
// Http is service
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private IVRUri = 'https://lingbot-api.lingtelli.com/IVR/user';
  IVRUser: any;

  constructor(private http: Http) { }

  registerUser(user) {
    let headers = this.buildHeaders();
    // Create a Observable (?)
    return this.http.post(this.IVRUri, user, { headers: headers })
      .map(res => res.json());
  }

  private buildHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return headers;
  }
}
