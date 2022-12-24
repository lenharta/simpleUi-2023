import React, { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

type ButtonComponentProps = {
  id?: string;
  text?: string;
  type?: "reset" | "submit" | "button";
  value?: string | number;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({
  id = "",
  text = "Button Text",
  type = "button",
  value = "",
  onClick = () => console.log("You clicked a button!"),
  disabled = false,
}: ButtonComponentProps) => {
  return (
    <button
      id={id}
      type={type}
      value={value}
      onClick={onClick}
      className="Button"
      disabled={disabled}
    >
      {text}
    </button>
  );
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

enum THEME_MODE {
  light = "THEME-MODE-LIGHT",
  dark = "THEME-MODE-DARK",
  dim = "THEME-MODE-DIM",
}

function useThemeMode() {
  const themeStore = useState(THEME_MODE.dark);
  return themeStore;
}

type ThemeStoreReturnType = ReturnType<typeof useThemeMode>;
const ThemeContext = createContext({} as ThemeStoreReturnType);

const ThemeContextProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useThemeMode();
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

// type ThemeActionType =
// | { type: THEME_MODE.light, payload: THEME_MODE.light }
// | { type: THEME_MODE.dark, payload: THEME_MODE.dark }
// | { type: THEME_MODE.dim, payload: THEME_MODE.dim }

// function themeReducer(state: ThemeStateInterface, action: ThemeActionType) {
//   switch(action.type) {
//     case
//   }
// }

function App() {
  return (
    <div className="App">
      <h1 className="Title">Vite + React</h1>
      <div className="card">
        <p className="Text">Change Theme Mode</p>
        <Button />
      </div>
    </div>
  );
}

export default App;
