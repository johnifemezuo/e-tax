import { useEffect, useState } from "react";
import { QueryApiResult } from "./interface/QueryInterface";

export const useFetchResponse = <T>(queryObject: QueryApiResult<T>) => {
  const [errors, setErrors] = useState({
    serverError: null,
    isServerError: false,
  });

  const [data, setData] = useState<
    Pick<QueryApiResult<T>, "data">["data"]["json"] | null
  >(null);

  useEffect(() => {
    if (
      queryObject?.data?.ok !== undefined &&
      queryObject?.data?.ok !== null &&
      !queryObject?.data?.ok
    ) {
      setData(null);
      setErrors({
        serverError: queryObject?.data?.json,
        isServerError: true,
      });
    } else if (queryObject?.data?.json) {
      setErrors({
        serverError: null,
        isServerError: false,
      });
      setData(queryObject?.data?.json);
    }
  }, [queryObject.data]);

  
  const resetErrors = () => {
    // console.log('called')
    setErrors(() => ({
      serverError: null,
      isServerError: false,
    }));
  };

  useEffect(() => {
    if (queryObject.isLoading) {
      setErrors({
        serverError: null,
        isServerError: false,
      });
    }
  }, [queryObject.isLoading]);

  const resetData = () => {
    setData(null);
  };

  return {
    ...queryObject,
    serverError: errors.serverError,
    isServerError: errors.serverError,
    data,
    resetErrors,
    resetData,
  };
};
