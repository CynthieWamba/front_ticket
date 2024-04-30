import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL, COMMENT_API_URL } from '../constants';
import { Observable } from 'rxjs';
import { CommentResult, CommentServiceRes } from '../domain/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentAPIServiceServiceService {

  constructor(private http: HttpClient) { }

  getTickets(): Observable<CommentServiceRes> {
    return this.http.get<CommentServiceRes>(BASE_API_URL+"/"+COMMENT_API_URL);
  }

  getTicketInfo(id: string): Observable<CommentResult> {
    return this.http.get<CommentResult>(BASE_API_URL+"/"+COMMENT_API_URL+"/"+id);
  }
}
