export interface TicketServiceRes {
  results:       TicketResult[];
  total_results: number;
}

export interface TicketResult {
  id:         number;
  content:    string;
  title:      string;
  tags:       Tag[] | [];
  comments:   TicketComment[] | [];
  state:      string;
  created_at: string;
  assign_to:  TicketAssignTo[] | [];
}

export interface TicketAssignTo {
  id:       number;
  username: string;
  name:     string;
  role:     string;
}

export interface TicketComment {
  id:      number;
  content: string;
}

export interface Tag {
  id:          number;
  name:        string;
  description: string;
}


export interface Ticket {
  id?:         number;
  content?:    string;
  title?:      string;
  tags?:       string;
  comments?:   number;
  state?:      string;
  assign_to?:  string;
}
