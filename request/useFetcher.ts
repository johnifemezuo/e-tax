import { atom, useAtom } from "jotai";
import { useMemo } from "react";
import { useModel } from "./useModel";

type RequestType = {
  links: {
    post: string;
    delete: string;
    get: string;
    patch: string;
    update: string;
    put: string;
  };
  refetchCaches: any[];
  load: false;
  freshCache: any;
  isFileAmong: false;
  refetchOnGet: false;
};

export const useFetcher: any = (config: RequestType) => {
  const rtc = useMemo(
    () =>
      atom({
        page: 1,
        search: null,
        nextCursor: null,
      }),
    []
  );
  const [queryCache, setQueryCache] = useAtom(rtc);
  const edc = useMemo(() => atom(null), []);
  const editCategory = useAtom(edc);
  const ddc = useMemo(() => atom(null), []);
  const deleteCategory = useAtom(ddc);
  const transformer = (data) => {
    return data;
  };

  const routeQueryCache = [
    config.freshCache
      ? config?.links?.get + config.freshCache
      : config?.links?.get,
    queryCache,
  ];

  if (config.refetchOnGet) {
    config.refetchCaches.push(routeQueryCache);
  }
  const modelConfig: any = {
    getLink: config?.links?.get,
    createLink: config?.links?.post,
    updateLink: config?.links?.patch,
    deleteLink: config?.links?.delete,
    patchLink: config?.links?.patch,
    putLink: config?.links?.put,
    paging: true,
    ...config,
    routeQueryCache,
    queryCache,
    setQueryCache,
    updateOnCreate: true,
    mutationState: {
      delete: deleteCategory,
      edit: editCategory,
    },
    transformer,
    isFileAmong: config.isFileAmong,
  };

  const model = useModel(modelConfig);

  return {
    ...model,
    get: { ...model.get, queryCache: routeQueryCache, setQueryCache },
  };
};

useFetcher.getQueryCache = (link: string) => [
  link,
  {
    page: 1,
    search: null,
    nextCursor: null,
  },
];
