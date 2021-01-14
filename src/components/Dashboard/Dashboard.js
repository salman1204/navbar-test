import React from 'react';
import SideNav from '../SideNav/SideNav';
import TopNav from '../TopNav/TopNav';
import './Dashboard.css'
import {NavbarContextProvider} from "./../NavbarContext/NavbarContext";

const Dashboard = () => {
    return ( 
        <NavbarContextProvider>
        <SideNav/>
        <TopNav/>
        </NavbarContextProvider>
    );
};

export default Dashboard;