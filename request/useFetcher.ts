import { atom, useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useModel } from "./useModel";

type RequestType = {
  links: {
    post?: string;
    delete?: string;
    get?: string;
    patch?: string;
    update?: string;
    put?: string;
  };
  refetchCaches?: any[];
  load?: boolean;
  freshCache?: any;
  isFileAmong?: false;
  refetchOnGet?: false;
};

export const useFetcher = (config: RequestType) => {
  // remove on react native

  const [page, setPage] = useState<number>(1);
  const { query, push, route } = useRouter();
  const rtc = useMemo(
    () =>
      atom({
        page: page ?? 1,
        search: null,
        nextCursor: null,
      }),
    [page]
  );

  useEffect(() => {
    if (query && query.page && !isNaN(Number(query.page))) {
      setPage(Number(query.page));
    }
  }, [query]);

  const nextPage = (pageNumber?: number) => {
    if (pageNumber) {
      setPage(Number(pageNumber));
      push(`${route}?page=${pageNumber}`);
    } else {
      let newPageNumber = Number(query.page ?? page);
      newPageNumber += 1;
      setPage(Number(newPageNumber));

      push(`${route}?page=${newPageNumber}`);
    }
  };

  const prevPage = (pageNumber?: number) => {
    if (pageNumber) {
      setPage(Number(pageNumber));
      push(`${route}?page=${pageNumber}`);
    } else {
      let newPageNumber = Number(query.page ?? page);
      newPageNumber -= 1;
      setPage(Number(newPageNumber));
      push(`${route}?page=${newPageNumber}`);
      window.scrollTo(0, 0);
    }
  };

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
    get: {
      ...model.get,
      queryCache: routeQueryCache,
      setQueryCache,
      paginate: {
        currentPage: page,
        nextPage,
        prevPage,
      },
    },
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
