import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL, USER_API_URL } from '../constants';
import { Observable } from 'rxjs';
import { UserResult, UserServiceRes } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserAPIServiceServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserServiceRes> {
    return this.http.get<UserServiceRes>(BASE_API_URL+"/"+USER_API_URL);
  }

  getUserInfo(id: string): Observable<UserResult> {
    return this.http.get<UserResult>(BASE_API_URL+"/"+USER_API_URL+"/"+id);
  }
}
