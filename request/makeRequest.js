import fetch from "isomorphic-fetch";
import { apiBaseUrl } from "./constants";

export async function makeRequest(
  isServer,
  path,
  method,
  store,
  contentType,
  body,
  bearer
) {
  return fetch(`${isServer ? "" : apiBaseUrl}${path}`, {
    method,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${bearer ?? (await store.getBearerToken())}`,
      "Content-Type": contentType,
    },
    [method.toLowerCase() !== "get" ? "body" : null]: body,
  });
}
