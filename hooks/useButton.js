import React, { createContext, useContext, useState } from "react";

const Context = createContext({});

export const ButtonProvider = ({ children }) => {
  const [button, setButton] = useState({});
  return (
    <Context.Provider
      value={{
        button,
        setButton,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default function useButton() {
  return useContext(Context);
}
