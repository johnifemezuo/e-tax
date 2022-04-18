import { useMutation } from "react-query";
import { defaultQueryFn } from "../defaultQueryFn";
import { useFetchResponse } from "../useFetchResponse";

export function usePutQuery(putLink, reloadOnEdit) {
  let put: any = useMutation(
    (body: { asArray: boolean }) => {
      const { asArray = false } = body;

      delete body.asArray;
      return defaultQueryFn(
        putLink,
        {
          method: "put",
          body,
        },
        false,
        asArray
      );
    },
    {
      onSuccess: () => {
        if (reloadOnEdit) {
          // queryCache.invalidateQueries(routeCache);
        }
      },
    }
  );

  put = useFetchResponse(put);
  return put;
}
