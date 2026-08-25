export class ApiError extends Error {
  statusCode: number;
  errors: any[];
  success: boolean;

  constructor(
    statusCode: number,
    message: string = "Something went wrong",
    errors: any[] = []
  ) {
    super(message);

    this.statusCode = statusCode;
    this.errors = errors;
    this.success = false;

    Object.setPrototypeOf(this, ApiError.prototype);
  }
}