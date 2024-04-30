import { TicketComment } from "./tickets";

export interface UserServiceRes {
  results:       UserResult[];
  total_results: number;
}

export interface UserResult {
  id:       number;
  username: string;
  name:     string;
  role:     string;
  comments: TicketComment[];
  tickets:  Ticket[];
}

export interface Ticket {
  id:      number;
  content: string;
  title:   string;
}


export interface User {
  id?:       number;
  index?:    number;
  username?: string;
  name?:     string;
  role?:     string;
  comments?: number;
  tickets?:  number;
}
