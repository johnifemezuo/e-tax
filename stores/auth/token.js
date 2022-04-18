import create from "zustand";

const useStore = create(() => ({ token: null }));

const getDefaultValues = async () => {
  try {
    const storageToken = localStorage.getItem("bearToken");

    if (!storageToken) {
      return useStore.getState().token;
    } else {
      return storageToken;
    }
  } catch (e) {}
  return "";
};

export const bearerToken = () => ({
  getBearerToken: getDefaultValues,
  setBearerToken: (newBearerToken, rememberMe) => {
    try {
      if (!rememberMe) {
        useStore.setState({ token: newBearerToken });
        localStorage.deleteItem("bearToken");
        return newBearerToken;
      } else {
        useStore.destroy();
        
        return localStorage.setItem("bearToken", newBearerToken);
      }
    } catch (e) {}
  },
});
