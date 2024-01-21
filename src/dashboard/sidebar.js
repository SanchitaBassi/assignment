import React from "react";
import {BiHome , BiBookAlt , BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle} from 'react-icons/bi';
import "./sidebar.css";

const Sidebar = () =>{

    return(

        <div className="menu-sidebar">
            <div className="logo-sidebar">
                <BiBookAlt className="logo-icon"/>
                <h2>Alemeno</h2>
            </div>

            <div className="menu--list">
            <a href="#" className="item-sidebar">
                <BiHome classname="icon-sidebar"/>
                Dashboard
            </a>
            <a href="#" className="item-sidebar">
                <BiTask classname="icon-sidebar"/>
                Assignment
                
            </a> <a href="#" className="item-sidebar">
                <BiSolidReport classname="icon-sidebar"/>
                Report
            </a>
            <a href="#" className="item-sidebar">
                <BiStats />
                Stats
            </a>
            <a href="#" className="item-sidebar">
                <BiMessage classname="icon-sidebar"/>
                Message
            </a>
            <a href="#" className="item-sidebar">
                <BiHelpCircle classname="icon-sidebar"/>
                Help
            </a>
            </div>

        </div>
    )
}

export default Sidebar;