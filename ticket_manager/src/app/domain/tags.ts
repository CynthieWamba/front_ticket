import { Ticket } from "./user";

export interface TagsServiceRes {
  results:       TagsResult[];
  total_results: number;
}

export interface TagsResult {
  id:          number;
  name:        string;
  description: string;
  tickets:     Ticket[];
  created_at:  string;
}

export interface Tags {
  id?:          number;
  index?:       number;
  name?:        string;
  description?: string;
  tickets?:     number;
  created_at?:  string;
}
