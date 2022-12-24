import { createContext } from "react";
import { ThemeStoreReturnType, useThemeStore } from "../hooks/useThemeStore";

const ThemeContext = createContext({} as ThemeStoreReturnType);

export const ThemeContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [theme, setTheme] = useThemeStore();
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

// interface State<T> {
//   data?: T
//   error?: Error
// }
// type Cache<T> = { [url: string]: T }
// // discriminated union type
// type Action<T> =
//   | { type: 'loading' }
//   | { type: 'fetched'; payload: T }
//   | { type: 'error'; payload: Error }

// type ThemeActionType =
// | { type: THEME_MODE.light, payload: THEME_MODE.light }
// | { type: THEME_MODE.dark, payload: THEME_MODE.dark }
// | { type: THEME_MODE.dim, payload: THEME_MODE.dim }

// function themeReducer(state: ThemeStateInterface, action: ThemeActionType) {
//   switch(action.type) {
//     case
//   }
// }
