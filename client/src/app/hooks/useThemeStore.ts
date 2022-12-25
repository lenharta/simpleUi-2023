import { useState } from "react";
import { THEME_MODE } from "../types/app.types";

export function useThemeStore() {
  const themeStore = useState({
    mode: THEME_MODE.dark,
  });
  return themeStore;
}
export type ThemeStoreReturnType = ReturnType<typeof useThemeStore>;
