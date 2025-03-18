import {
  ErrorResponseException,
  IErrorResponse,
} from "@/common/types/response.type";

type FetcherFunction<T, P> = (params: P) => Promise<T>;

export const fetcher =
  <T, P>(action: FetcherFunction<T, P>) =>
  async (params: P): Promise<T> => {
    const res = action(params);
    const err = res as IErrorResponse<T>;

    if (err.error) {
      throw new ErrorResponseException(err.success ?? false, err.error);
    }
    return res;
  };
