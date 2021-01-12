import React, { useContext, useState } from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";
// import {NavbarContext} from './../NavbarContext/NavbarContext.js';

const SideNav = () => {
  // const [sidebar, setSidebar] = useContext(NavbarContext);

  // const showSidebar = () => setSidebar(!sidebar);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* <div className="nav__sign">
          <Link to="#" className="nav__bar">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div> */}
        <nav
          className="sidebar__nav"
          style={sidebar ? { left: "0" } : { left: "-100%" }}
        >
          <nav className="sidebar__wrap">
            <Link to="#" className="nav__bar">
              <AiIcons.AiOutlineClose />
            </Link>
            {SidebarData.map((item, index) => {
              return <Submenu item={item} key={index} />;
            })}
          </nav>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SideNav;
