import { useMutation } from "react-query";
import { defaultQueryFn } from "../defaultQueryFn";
import { useFetchResponse } from "../useFetchResponse";

export function useDeleteQuery(deleteLink, reloadOnDelete) {
  let deleteModel: any = useMutation(
    (body) => {
      const isParameterized = deleteLink.match(/\{\w+\}/g);
      if (isParameterized) {
        // build link
        isParameterized.forEach((param) => {
          param = param.replace(/\{/, "").replace(/\}/, "");
          deleteLink = deleteLink.replace(`{${param}}`, body[param]);
        });
      }

      return defaultQueryFn(deleteLink, {
        method: "delete",
        body,
      });
    },
    {
      onSuccess: () => {
        if (reloadOnDelete) {
          // queryCache.invalidateQueries(routeCache);
        }
      },
    }
  );

  deleteModel = useFetchResponse(deleteModel);
  return { deleteModel, deleteLink };
}
