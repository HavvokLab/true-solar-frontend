import { ExpiredAtLocalStorage, TokenLocalStorage } from "@/types";
import { useLocalStorage } from "@mantine/hooks";

export const useExpiredLocalStorage = () => {
  return useLocalStorage<ExpiredAtLocalStorage>({
    key: "texp",
    defaultValue: null,
  });
};

export const useTokenLocalStorage = () => {
  return useLocalStorage<TokenLocalStorage>({
    key: "atkn",
    defaultValue: null,
  });
};
