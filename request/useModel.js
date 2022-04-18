import { useMutation, useQueryClient } from "react-query";
import { defaultQueryFn } from "./defaultQueryFn";
import { useCreateQuery } from "./queries/useCreateQuery";
import { useDeleteQuery } from "./queries/useDeleteQuery";
import { useEditQuery } from "./queries/useEditQuery";
import { queryData, useGetQuery } from "./queries/useGetQuery";
import { usePutQuery } from "./queries/usePutQuery";
import { useFetchResponse } from "./useFetchResponse";

export const useModel = ({
  load = false,
  createLink = null,
  updateLink = null,
  deleteLink = null,
  patchLink = null,
  putLink = null,
  getLink = null,
  paging = false,
  createComplete = () => {},
  reloadOnDelete = true,
  reloadOnEdit = true,
  mutationState = { edit: [], delete: [] },
  queryString,
  onSuccess,
  isFileAmong = false,
  refetchCaches = [],
  queryCache: routeCache,
  setQueryCache: setRouteCache,
  routeQueryCache,
} = {}) => {
  // prepare query
  const queryClient = useQueryClient();

  let query = useGetQuery(
    getLink,
    routeQueryCache,
    queryString,
    load,
    paging,
    onSuccess
  );

  const loadData = (link = getLink, qs = queryString, cache = routeCache) => {
    return queryData(link, qs, cache);
  };
  // build create
  let create = useCreateQuery(
    createLink,
    isFileAmong,
    createComplete,
    refetchCaches
  );

  // build edit
  let edit = useEditQuery(updateLink, reloadOnDelete);

  let put = usePutQuery(putLink, reloadOnEdit);

  let patch = usePatchQuery(patchLink, isFileAmong, reloadOnEdit);

  // build delete
  let { deleteModel } = useDeleteQuery(deleteLink, reloadOnDelete);
  return {
    get: {
      ...query,
      catche: {
        ...queryClient,
        update: () => {
          queryClient.invalidateQueries(routeCache);
        },
      },
      update: (options) => {
        query.refetch();
      },
      serverError: query.serverError,
      isServerError: query.isServerError,
      search: setRouteCache,
      route: routeCache,
      loadData,
    },

    create: {
      serverError: create.serverError,
      isServerError: create.isServerError,
      ...create,
      data: create.data,
      insert: (body, options) => create.mutate(body, options),
    },
    edit: {
      ...edit,
      state: [...mutationState.edit],
      update: edit.mutate,
      serverError: edit.serverError,
      isServerError: edit.isServerError,
    },
    put: {
      ...put,
      put: put.mutate,
      serverError: put.serverError,
      isServerError: put.isServerError,
    },
    patch: {
      ...patch,
      patch: patch.mutate,
      serverError: patch.serverError,
      isServerError: patch.isServerError,
    },
    delete: {
      ...deleteModel,
      state: [...mutationState.delete],
      serverError: deleteModel.serverError,
      isServerError: deleteModel.isServerError,
    },
  };
};

function usePatchQuery(patchLink, isFileAmong, reloadOnEdit) {
  let patch = useMutation(
    (body = { asArray: false }) => {
      const { asArray } = body;

      delete body.asArray;
      return defaultQueryFn(
        patchLink,
        {
          method: "PATCH",
          body,
          isFileAmong,
        },
        false,
        asArray
      );
    },
    {
      onSuccess: () => {
        if (reloadOnEdit) {
          // queryClient.invalidateQueries(routeCache);
        }
      },
    }
  );

  patch = useFetchResponse(patch);
  return patch;
}
