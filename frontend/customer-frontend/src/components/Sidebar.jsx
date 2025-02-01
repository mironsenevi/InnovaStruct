import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = ({show}) => {

    

    return (
        <div className={show ? "sidenav active" : "sidenav"}>
           <ul>

            <li> <Link to="/"></Link><a href="#">Dashboard</a></li>
            <li><Link to="/viewConstructors">View Constructors</Link></li>
            <li><Link to="/tenders">Tenders</Link></li>
            <li><Link to="/myProjects">My Projects</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/settings">Settings</Link></li>

           </ul>
        </div>
    );
};

export default Sidebar;
