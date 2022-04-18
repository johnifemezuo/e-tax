import { UseMutationResult, UseQueryResult } from "react-query";

export type QueryApiResult<T> = {
  data: {
    json: T;
    ok: string;
  };
} & UseQueryResult;

export type UseMutationApiResult<T> = {
  data: {
    json: T;
    ok: string;
  };
} & UseMutationResult;
