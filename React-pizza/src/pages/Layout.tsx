import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import "../scss/app.scss";
import "../App.css";
import { createContext, useState } from "react";

export const SearchContext = createContext("");

const Layout = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />

        <div className="content">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
};

export default Layout;
