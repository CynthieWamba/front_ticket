export interface SuccessRes {
  message: string;
  erreur?: string;
}

export interface ErrorRes {
  erreur: string;
  message?: string;
}
