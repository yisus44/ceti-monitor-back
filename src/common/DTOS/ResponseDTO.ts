export default class ResponseDTO<T> {
  public data: T;
  public error?: string | null;
  public statusCode: number;

  constructor(data: T, error: string | null, statusCode: number) {
    this.data = data;
    this.error = error;
    this.statusCode = statusCode;
  }
}
