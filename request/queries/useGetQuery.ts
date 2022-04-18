import { useQuery } from "react-query";
import { getData } from "../getData";
import { queryClient } from "../queryClient";
import { useFetchResponse } from "../useFetchResponse";
export function useGetQuery(
  getLink,
  routeQueryCache,
  queryString,
  load,
  paging,
  onSuccess
) {
  const [, routeParameters] = routeQueryCache;
  const response = useQuery(
    routeQueryCache,
    () => {
      return getData(routeParameters, getLink, queryString);
    },
    {
      enabled: load,
      keepPreviousData: paging,
      onSuccess,
    }
  );

  return useFetchResponse(response);
}

export async function queryData(
  getLink,
  queryString: any,
  cache = { page: 1, search: null, nextCursor: null }
) {
  const fetchData = () => getData(cache, getLink, queryString);
  const response = await queryClient.fetchQuery([getLink, cache], fetchData);

  return response;
}
