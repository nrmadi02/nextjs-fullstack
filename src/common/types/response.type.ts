import { ZodIssue, typeToFlattenedError } from "zod";

export interface IErrorResponse<T> {
  success?: boolean;
  error?: {
    message?: string;
    errors?: ZodIssue[];
    formErrors?: typeToFlattenedError<T, string>;
  };
}

export interface IResponse<T> extends IErrorResponse<T> {
  data?: T;
}

export interface IPaginationResponse<T> extends IErrorResponse<T> {
  data?: T[];
  total?: number;
  totalPage?: number;
  page?: number;
  take?: number;
}

export class ErrorResponseException<T> implements IErrorResponse<T> {
  constructor(
    public success: boolean = false,
    public error: {
      message?: string;
      errors?: ZodIssue[];
      formErrors?: typeToFlattenedError<T, string>;
    } = {}
  ) {}
}
