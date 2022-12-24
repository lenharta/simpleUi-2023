import { useContext } from "react";
import "./App.css";
import ThemeContext from "./app/theme/ThemeContext";
import { Button, Welcome } from "./lib";

function App() {
  const [theme, setTheme] = useContext(ThemeContext)!;
  console.log(theme);

  return (
    <div className="App">
      <div className="card">
        <Welcome text="Welcome to your React App!" />

        <Button />
      </div>
    </div>
  );
}

export default App;
