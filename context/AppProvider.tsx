import React, { useState } from "react";
import { AppContext } from "./AppContext";
import useDarkMode from "../hooks/useDarkMode";

export interface Props {
  children: ChildNode;
  resetStore: Function;
}

const AppProvider = (props: Props) => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        // isAuth: authorized,
        // signin: attemptLogin,
        // setDarkMode,
        // darkMode,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
