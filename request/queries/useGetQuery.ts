import { useQuery } from "react-query";
import { getData } from "../getData";
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
  const response: any = useQuery(
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
