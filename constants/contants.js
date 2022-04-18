export const Validation = {
  EAMIL_REGEX:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  PHONE: /^[0-9]*$/,
  NUMBER: /^[0-9.]*$/,
  STRING: /^[a-zA-Z ]*$/,
};


export const AccountType = {
  SAVINGS: "SAVINGS",
  CURRENT: "CURRENT",
}