import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API_URL, TICKET_API_URL } from '../constants';
import { Observable } from 'rxjs';
import { TicketResult, TicketServiceRes } from '../domain/tickets';
import { ErrorRes, SuccessRes } from '../domain/common';

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

  createTicket(body: JSON): Observable<SuccessRes | ErrorRes> {
    return this.http.post<SuccessRes | ErrorRes>(BASE_API_URL+"/"+TICKET_API_URL, body=body);
  }

  updateTicket(id: string, body: JSON): Observable<TicketResult> {
    return this.http.put<TicketResult>(BASE_API_URL+"/"+TICKET_API_URL+"/"+id, body=body);
  }

  deleteTicket(id: string): Observable<SuccessRes | ErrorRes> {
    return this.http.delete<SuccessRes | ErrorRes>(BASE_API_URL+"/"+TICKET_API_URL+"/"+id);
  }
}
