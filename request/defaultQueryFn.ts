import { bearerToken } from "../stores/auth/token";
import { configRequest } from "./configRequest";
import { makeRequest } from "./makeRequest";

export const defaultQueryFn = async <T>(
  path,
  { method = "get", body = null, isFileAmong = false } = {},
  isServer = false,
  asArray = false,
  node = false,
  bearer = null
) => {
  try {
    const store = bearerToken();
    const setBearerToken = store.setBearerToken;
    let contentType = body ? "application/json" : null;

    ({ body, contentType } = configRequest(
      isFileAmong,
      body,
      asArray,
      contentType
    ));

    const resp = await makeRequest(
      isServer,
      path,
      method,
      store,
      contentType,
      body,
      bearer
    );

    const json = await resp.json();
    // check if bearer token was returned
    if (json && json.access_token && !node && !bearer) {
      await setBearerToken(json.access_token);
    }

    if (json.statusCode && json.statusCode === 401 && !node && !bearer) {
      // log user out
      await setBearerToken("");
      localStorage.removeItem("userProfile");
    }

    return { json, ok: await resp.ok };
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};
