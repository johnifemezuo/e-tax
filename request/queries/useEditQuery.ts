import { useMutation } from "react-query";
import { defaultQueryFn } from "../defaultQueryFn";
import { useFetchResponse } from "../useFetchResponse";

export function useEditQuery(updateLink, reloadOnDelete) {
  let edit: any = useMutation(
    (body: { asArray: boolean }) => {
      const { asArray = false } = body;

      delete body.asArray;
      return defaultQueryFn(
        updateLink,
        {
          method: "post",
          body,
        },
        false,
        asArray
      );
    },
    {
      onSuccess: () => {
        if (reloadOnDelete) {
          // queryCache.invalidateQueries(routeCache);
        }
      },
    }
  );

  edit = useFetchResponse(edit);
  return edit;
}
