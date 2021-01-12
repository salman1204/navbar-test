import React, { useState } from "react";
import "./Submenu.css";
import { Link } from "react-router-dom";

const Submenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <div>
      <Link to={item.path} onClick={item.subNav && showSubnav} className="sidebar__link">
        <div>
          {item.icon}
          <span className="sidebar__label">{item.title}</span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
              <Link to={item.path} key={index} className="dropdown__link">
                  {item.icon}
                  <span className="sidebar__label">{item.title}</span>
              </Link>
          );})}
    </div>
  );
};

export default Submenu;
