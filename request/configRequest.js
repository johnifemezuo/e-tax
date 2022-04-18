import { makeBody } from "./makeBody";

export function configRequest(isFileAmong, body, asArray, contentType) {
  if (isFileAmong) {
    const formData = new FormData();
    if (body) {
      const bodyKeys = Object.keys(body);
      makeBody(bodyKeys, formData, asArray);
    }
    contentType = "multipart/form-data";
    body = formData;
  } else {
    body = JSON.stringify(body);
  }
  return { body, contentType };
}
