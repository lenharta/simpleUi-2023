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
