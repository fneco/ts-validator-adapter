export interface Success<Data = any> {
  success: true;
  data: Data;
  error?: never;
}
export interface Failure<Errors = any> {
  success: false;
  data?: never;
  errors: Errors;
}

export type ValidationResult<Data = any, Errors = any> =
  | Success<Data>
  | Failure<Errors>;
