export interface ProjectServiceRes {
  results:       ProjectResult[];
  total_results: number;
}

export interface ProjectResult {
  id:          number;
  name:        string;
  ticketsList: ProjectTickets[] | [];
}

export interface ProjectTickets {
  id:         number;
  content:    string;
  title:      string;
  state:      string;
  milistone:  null;
  created_at: number;
  updated_at: number | null;
}

export interface Project {
  id?: number;
  index?: number;
  name?: string;
  nombre_ticket?: number;
}
