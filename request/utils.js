export const urlToObject = async (image) => {
  const response = await fetch(image);
  // here image is url/location of image
  const blob = await response.blob();
  const splitType = blob.type.split("/");
  return new File([blob], Date.now() + "-file." + splitType[1], {
    type: blob.type,
  });
};

export const convertToBoolean = (value) => {
  const falsable = [0, false, "false", "null", null, "undefined", undefined];
  return Number(!falsable.includes(value));
};

export const moneyFormat = (amount) => {
  return new Intl.NumberFormat("ng-NG").format(amount);
};

export const shuffleString = (str) => {
  var a = str.split(""),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
};

export const createBrowserId = () => {
  let randStr = Date.now() + Math.random() * 500002235620000;
  const randDate = Math.random() * Date.now();
  randStr = randDate + randStr + randDate;
  randStr = randStr.toString();
  return shuffleString(randStr.replace(/[^a-zA-Z0-9]/g, ""));
};
