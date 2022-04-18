import { defaultQueryFn } from "./defaultQueryFn";

export const serverRequest = async (path, token, method = "get") => {
  const response = await defaultQueryFn(
    path,
    { method },
    false,
    false,
    false,
    token
  );
  return response.json;
};
