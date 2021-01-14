import React, { useState, createContext } from "react";

export const NavbarContext = createContext();

export const NavbarContextProvider = (props) => {
  
    const [sidebar, setSidebar] = useState(false);

  return (
    <NavbarContext.Provider value={[sidebar, setSidebar]}>
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;