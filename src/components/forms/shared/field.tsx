export interface Field {
  value: string;
  error: string;
}

export const NO_ERROR = ' ';

export const hasError = (error: string) => error !== NO_ERROR;
