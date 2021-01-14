import React, { useContext} from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";
import {NavbarContext} from './../NavbarContext/NavbarContext.js';

const SideNav = () => {
  const [sidebar, setSidebar] = useContext(NavbarContext);
  const showSidebar = () => setSidebar(!sidebar);
  
  return (
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav
          className="sidebar__nav"
          style={sidebar ? { left: "0" } : { left: "-100%" }}
        >
          <nav className="sidebar__wrap">
            <Link to="#" className="nav__bar">
              <AiOutlineClose onClick={showSidebar}/>
            </Link>
            {SidebarData.map((item, index) => {
              return <Submenu item={item} key={index} />;
            })}
          </nav>
        </nav>
      </IconContext.Provider>
  );
};

export default SideNav;
