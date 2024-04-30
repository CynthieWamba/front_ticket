import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL, TAGS_API_URL } from '../constants';
import { Observable } from 'rxjs';
import { TagsResult, TagsServiceRes } from '../domain/tags';

@Injectable({
  providedIn: 'root'
})
export class TagsAPIServiceServiceService {

  constructor(private http: HttpClient) { }

  getTags(): Observable<TagsServiceRes> {
    return this.http.get<TagsServiceRes>(BASE_API_URL+"/"+TAGS_API_URL);
  }

  getTagInfo(id: string): Observable<TagsResult> {
    return this.http.get<TagsResult>(BASE_API_URL+"/"+TAGS_API_URL+"/"+id);
  }
}
