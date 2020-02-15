export default class HTTPError implements Error {
  public name: string;
  public message: string;
  public stack?: string;
  public statusCode: number;
  private baseError: Error;

  constructor(message: string, statusCode: number) {
    this.baseError = new Error(message);
    this.name = this.baseError.name;
    this.message = this.baseError.message;
    this.stack = this.baseError.stack;
    this.statusCode = statusCode;
  }
}
