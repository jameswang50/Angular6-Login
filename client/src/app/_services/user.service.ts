import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(environment.appConfig.apiUrl + '/users');
  }

  getById(_id: string) {
    return this.http.get(environment.appConfig.apiUrl + '/users/' + _id);
  }

  create(user: User) {
    return this.http.post(environment.appConfig.apiUrl + '/users/register', user);
  }

  update(user: User) {
    return this.http.put(environment.appConfig.apiUrl + '/users/' + user._id, user);
  }

  delete(_id: string) {
    return this.http.delete(environment.appConfig.apiUrl + '/users/' + _id);
  }
}
