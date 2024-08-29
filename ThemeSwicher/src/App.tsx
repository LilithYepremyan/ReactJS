import { useState } from "react";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={isDark ? "dark-mode" : "light-mode"}>
      <h1>Theme Switcher</h1>
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        {isDark ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}

export default App;
