import { createContext } from "react";
import { ThemeStoreReturnType, useThemeStore } from "../hooks/useThemeStore";

// should use hook or reduce state (clarify which one is faster).
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

const ROUTER_DATA = {
  home: {
    path: "/",
    title: "SimpleUi | Home",
    id: "home-page-id",
    seo: {
      title: "SimpleUi | Home",
      decription: "insert component library description.",
    },
  },
  about: {
    path: "/about",
    title: "SimpleUi | About",
    id: "about-page-id",
    seo: {
      title: "SimpleUi | About",
      decription: "insert component library description.",
    },
  },
  pricing: {
    path: "/pricing",
    title: "SimpleUi | Plans & Pricing",
    id: "about-page-id",
    seo: {
      title: "SimpleUi | Plans & Pricing",
      decription: "insert component library description.",
    },
  },
  library: {
    path: "/library",
    title: "SimpleUi | Library",
    id: "library-page-id",
    seo: {
      title: "SimpleUi | Library",
      decription: "insert component library description.",
    },
  },
  contact: {
    path: "/contact",
    title: "SimpleUi | Contact",
    id: "contact-page-id",
    seo: {
      title: "SimpleUi | Contact",
      decription: "insert component library description.",
    },
  },
};

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
