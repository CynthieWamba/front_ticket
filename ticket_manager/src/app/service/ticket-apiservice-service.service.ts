import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL, TICKET_API_URL } from '../constants';
import { Observable } from 'rxjs';
import { TicketResult, TicketServiceRes } from '../domain/tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketAPIServiceServiceService {

  constructor(private http: HttpClient) { }

  getTickets(): Observable<TicketServiceRes> {
    return this.http.get<TicketServiceRes>(BASE_API_URL+"/"+TICKET_API_URL);
  }

  getTicketInfo(id: string): Observable<TicketResult> {
    return this.http.get<TicketResult>(BASE_API_URL+"/"+TICKET_API_URL+"/"+id);
  }
}
