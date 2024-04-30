import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL, USER_API_URL } from '../constants';
import { Observable } from 'rxjs';
import { UserResult, UserServiceRes } from '../domain/user';
import { ErrorRes, SuccessRes } from '../domain/common';

@Injectable({
  providedIn: 'root'
})
export class UserAPIServiceServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserServiceRes> {
    return this.http.get<UserServiceRes>(BASE_API_URL+"/"+USER_API_URL);
  }

  getUserInfo(id: string): Observable<UserResult> {
    console.log("++++++++++++++++++++++++++++++++  "+id)
    return this.http.get<UserResult>(BASE_API_URL+"/"+USER_API_URL+"/"+id);
  }

  createUser(body: JSON): Observable<SuccessRes | any> {
    return this.http.post<SuccessRes | any>(BASE_API_URL+"/"+USER_API_URL, body=body);
  }

  updateUser(id: string, body: JSON): Observable<UserResult> {
    return this.http.put<UserResult>(BASE_API_URL+"/"+USER_API_URL+"/"+id, body=body);
  }

  deleteUser(id: string): Observable<SuccessRes> {
    return this.http.delete<SuccessRes>(BASE_API_URL+"/"+USER_API_URL+"/"+id+"/");
  }
}
