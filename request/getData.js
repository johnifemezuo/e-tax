import { defaultQueryFn } from "./defaultQueryFn";

export const getData = (queryData, pageLink, queryString = { page: true }) => {
  let link;

  if (queryData && queryData.search) {
    link = `${pageLink}?${
      queryString && queryString.page != false ? "page=" + queryData.page : null
    }&search=${queryData.search}`;
  } else {
    link = `${pageLink}?${
      queryString && queryString.page != false ? "page=" + queryData.page : null
    }`;
  }
  if (queryData && queryData.nextCursor) {
    link += `&nextCursor=${queryData.nextCursor}`;
  }

  if (queryString) {
    if (queryString && typeof queryString === "object") {
      for (let key in queryString) {
        if (key !== "page") link += `&${key}=${queryString[key]}`;
      }
    }
  }

  return defaultQueryFn(link);
};
