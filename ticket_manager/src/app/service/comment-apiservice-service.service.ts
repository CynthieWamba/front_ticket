import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL, COMMENT_API_URL } from '../constants';
import { Observable } from 'rxjs';
import { CommentResult, CommentServiceRes } from '../domain/comment';
import { ErrorRes, SuccessRes } from '../domain/common';

@Injectable({
  providedIn: 'root'
})
export class CommentAPIServiceServiceService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<CommentServiceRes> {
    return this.http.get<CommentServiceRes>(BASE_API_URL+"/"+COMMENT_API_URL);
  }

  getCommentInfo(id: string): Observable<CommentResult> {
    return this.http.get<CommentResult>(BASE_API_URL+"/"+COMMENT_API_URL+"/"+id);
  }

  createComment(body: JSON): Observable<SuccessRes | ErrorRes> {
    return this.http.post<SuccessRes | ErrorRes>(BASE_API_URL+"/"+COMMENT_API_URL, body=body);
  }

  updateComment(id: string, body: JSON): Observable<CommentResult> {
    return this.http.put<CommentResult>(BASE_API_URL+"/"+COMMENT_API_URL+"/"+id, body=body);
  }

  deleteComment(id: string): Observable<SuccessRes | ErrorRes> {
    return this.http.delete<SuccessRes | ErrorRes>(BASE_API_URL+"/"+COMMENT_API_URL+"/"+id);
  }
}
