export function makeBody(bodyKeys, formData, asArray) {
  bodyKeys.forEach((key) => {
    // if body is an array
    if (body[key] instanceof Array) {
      if (body[key].length === 1 && !asArray) {
        formData.append(key, body[key][0]);
      } else {
        for (let value of body[key]) {
          formData.append(`${key}[]`, value);
        }
      }
    } else {
      formData.append(key, body[key]);
    }
  });
}