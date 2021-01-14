import React, { useContext, useState } from "react";
import "./TopNav.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { NavbarContext } from "./../NavbarContext/NavbarContext.js";
import { Col, Container, Row } from "react-bootstrap";

const TopNav = () => {
  const [sidebar, setSidebar] = useContext(NavbarContext);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Container fluid>
    <Row className="top__header bg-light align-items-center">
      <Col xs={2} className="pl-4">
        <Link to="#">
          <FaBars style={{color:"#174C6B"}} onClick={showSidebar} />
        </Link>
      </Col>
      <Col className="d-none d-md-block">
        <p className="welcome__text m-0">Welcome to Amar Teacher</p>
      </Col>
      <Col>
        <table className="box__container">
          <tr>
            <td>
              <input type="text" placeholder="Search" className="search px-2" />
            </td>
            <td className="pr-2 py-1">
              <a href="#">
                <FiSearch style={{ color: "#a3a2a2" }} />
              </a>
            </td>
          </tr>
        </table>
      </Col>
      <Col className="d-flex justify-content-end  p-0 m-0">
        <div className="mr-4" >
          <AiOutlineMail className="icon" />
          <span class="notification__badge">4</span>
        </div>
        <div className="mr-4">
          <IoNotificationsOutline className="icon" />
          <span class="notification__badge orange__badge">4</span>
        </div>
        <div className="mr-3">
          <CgProfile className="icon" />
        </div>
      </Col>
    </Row>
    </Container>
  );
};

export default TopNav;
