import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import "../scss/app.scss";
import "../App.css";
import React, { createContext, useState } from "react";

interface SearchContextType {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

const Layout = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />-
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
