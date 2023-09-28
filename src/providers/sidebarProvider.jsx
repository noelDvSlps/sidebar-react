/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        toggle,
        windowWidth,
        setWindowWidth,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};
