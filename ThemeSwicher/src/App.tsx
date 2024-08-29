// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [isDark, setIsDark] = useState(false);
//   return (
//     <div className={isDark ? "dark-mode" : "light-mode"}>
//       <h1>Theme Switcher</h1>
//       <button
//         onClick={() => {
//           setIsDark(!isDark);
//         }}
//       >
//         {isDark ? "Light mode" : "Dark mode"}
//       </button>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [isDark, setIsDark] = useState(false);

//   const themeSwitcher = (isDark: boolean) => {
//     setIsDark(!isDark);
//   };

//   return (
//     <div className={isDark ? "dark-mode" : "light-mode"}>
//       <h1>Theme Switcher</h1>
//       <button
//         onClick={() => {
//           themeSwitcher(isDark);
//         }}
//       >
//         {isDark ? "Light mode" : "Dark mode"}
//       </button>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import "./App.css";

const ThemeSwitcher = ({ render }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(!isDark);
  }, [isDark]);
  return render({ isDark });
};

function App() {
  return (
    <ThemeSwitcher
      render={({ isDark }) => {
        <>
          <h1>Theme Switcher</h1>;
          {isDark ? (
            <div className={"dark-mode"}>
              <button>Light mode</button>
            </div>
          ) : (
            <div className={"light-mode"}>
              <button>Dark mode</button>
            </div>
          )}
        </>;
      }}
    />
  );
}

export default App;
