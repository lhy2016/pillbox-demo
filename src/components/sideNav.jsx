import React, { Component } from 'react';
import '../css/sideNav.css'


class SideNav extends Component {
    render() { 
        return (
        <nav className="sideNav">
            <a href="#" className="logo">
                <div className="logo-content">
                    Pill Box Demo
                </div>
            </a>
            <div style={{borderBottom: "1px solid #dddddd",
                         margin:"0px 15px"}}> 
            </div>
            <div className = "side-menu-wrapper">
                <button>
                    <i class="material-icons">dashboard</i>
                    Dashboard
                </button>
                <button>
                    <i class="material-icons">person</i>
                    My Account</button>
                <button>
                    <i class="material-icons">local_hospital</i>
                    Pill Box</button>
                <button>
                    <i class="material-icons">info</i>Health Tips</button>
            </div>
        </nav>
        );
    }
}
 
export default SideNav;