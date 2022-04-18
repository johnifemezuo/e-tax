import { useMutation, useQueryClient } from "react-query";
import { defaultQueryFn } from "../defaultQueryFn";
import { useFetchResponse } from "../useFetchResponse";

export function useCreateQuery(
  createLink,
  isFileAmong,
  createComplete,
  refetchCaches = []
) {
  const queryClient = useQueryClient();

  let response: any = useMutation(
    (body: { asArray: boolean }) => {
      const { asArray = false } = body;

      delete body.asArray;
      return defaultQueryFn(
        createLink,
        {
          method: "post",
          body,
          isFileAmong,
        },
        false,
        asArray
      );
    },
    {
      onSuccess: () => {
        createComplete();
        if (refetchCaches.length > 0) {
          refetchCaches.forEach((cache) => {
            queryClient.invalidateQueries(cache);
          });
        }
      },
    }
  );
  return useFetchResponse(response);
}
