import {
  ErrorResponseException,
  IErrorResponse,
} from "@/common/types/response.type";

type FetcherFunction<T, P = undefined> = P extends undefined
  ? () => Promise<T>
  : (params: P) => Promise<T>;

export const fetcher =
  <T, P = undefined>(action: FetcherFunction<T, P>) =>
  async (params: P): Promise<T> => {
    const res = await (params !== undefined
      ? action(params)
      : (action as () => Promise<T>)());
    const err = res as IErrorResponse<T>;

    if (err.error) {
      throw new ErrorResponseException(err.success ?? false, err.error);
    }
    return res;
  };
