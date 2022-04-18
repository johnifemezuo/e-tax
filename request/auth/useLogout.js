import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { useBearerToken } from "../../../stores/auth/token";
import { defaultQueryFn } from "../defaultQueryFn";

export const useLogout = () => {
  const { push } = useRouter();
  const { bearerToken, setBearerToken } = useBearerToken();

  const logout = useMutation(
    async () =>
      defaultQueryFn(
        "/api/logout",
        {
          method: "POST",
        },
        true
      ),
    {
      onSuccess: async () => {
        await AsyncStorage.clear();
        setBearerToken("");
        window.location = "/";
      },
    }
  );

  return { ...logout, logout: logout.mutate };
};
