import "./App.css";
import { useContext, useMemo } from "react";
import { THEME_MODE } from "./app/types/app.types";
import ThemeContext from "./app/theme/ThemeContext";
import { Button, Welcome } from "./lib";
import { useFetchData } from "./app/hooks/useFetchData";

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: string;
  ibu: number;
  logo: string;
  level: number;
}

function App() {
  const [theme, setTheme] = useContext(ThemeContext);
  const { data } = useFetchData<Beverage[]>("data/bevarage-taplist.json");

  function handleToggleTheme(value: THEME_MODE) {
    if (value) {
      setTheme({ mode: value });
    } else {
      return;
    }
  }

  const portlandTaps = useMemo(
    () => (data || []).filter((bev) => bev.producerLocation.includes("Bend")),
    [data]
  );

  console.log(portlandTaps);

  return (
    <div className="App">
      <div className="card">
        <Welcome text="Welcome to your React App!" />

        <Button
          text={"Set Theme Dim"}
          onClick={() => handleToggleTheme(THEME_MODE.dim)}
        />
        <Button
          text={"Set Theme Light"}
          onClick={() => handleToggleTheme(THEME_MODE.light)}
        />
        <Button
          text={"Set Theme Dark"}
          onClick={() => handleToggleTheme(THEME_MODE.dark)}
        />

        <p className="text-size-3">Current Theme Mode: {theme.mode}</p>

        {data?.map(
          ({
            ibu,
            abv,
            name,
            logo,
            level,
            beverageName,
            beverageStyle,
            beverageColor,
            producerLocation,
            producerName,
          }) => (
            <div key={beverageName}>
              <p className="text-size-5">{name}</p>
              <p className="text-size-2" style={{ color: beverageColor }}>
                beverageName: {beverageName}
              </p>
              {logo && <img src={logo} alt={beverageName} />}
              <p className="text-size-2">beverageStyle: {beverageStyle}</p>
              <p className="text-size-2">ibu: {ibu?.toString()}</p>
              <p className="text-size-2">abv: {abv?.toString()}</p>
              <p className="text-size-2">level: {level?.toString()}</p>
              <p className="text-size-2">
                producerLocation: {producerLocation}
              </p>
              <p className="text-size-2">producerName: {producerName}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
