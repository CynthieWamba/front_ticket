export interface CommentServiceRes {
  results:       CommentResult[];
  total_results: number;
}

export interface CommentResult {
  id:         number;
  content:    string;
  created_at: string;
}


export interface Comment {
  id?:         number;
  content?:    string;
  created_at?: string;
}
