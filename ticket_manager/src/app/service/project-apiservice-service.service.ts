import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL, PROJECT_API_URL, TICKET_API_URL } from '../constants';
import { Observable } from 'rxjs';
import { ProjectServiceRes, ProjectResult } from '../domain/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectAPIServiceServiceService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<ProjectServiceRes> {
    return this.http.get<ProjectServiceRes>(BASE_API_URL+"/"+PROJECT_API_URL);
  }

  getProjectInfo(id: string): Observable<ProjectResult> {
    return this.http.get<ProjectResult>(BASE_API_URL+"/"+PROJECT_API_URL+"/"+id);
  }
}
