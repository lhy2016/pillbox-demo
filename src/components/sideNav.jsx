import React, { Component } from 'react';
import '../css/sideNav.css';
import SideNavButton from '../components/sideNavButton';



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
                <SideNavButton  iconValue="dashboard" buttonText="Dashboard" tabId="1" urlMapping={this.props.urlMapping}
                                toogleActive={this.props.changeActive} currentActive={this.props.currentActiveTab} />
                <SideNavButton  iconValue="person" buttonText="My Account" tabId="2" urlMapping={this.props.urlMapping}
                                toogleActive={this.props.changeActive} currentActive={this.props.currentActiveTab}/>
                <SideNavButton  iconValue="local_hospital" buttonText="Pill Box" tabId="3" urlMapping={this.props.urlMapping}
                                toogleActive={this.props.changeActive} currentActive={this.props.currentActiveTab}/>
                <SideNavButton  iconValue="favorite" buttonText="Healthcare" tabId="4" urlMapping={this.props.urlMapping}
                                toogleActive={this.props.changeActive} currentActive={this.props.currentActiveTab}/>
                <SideNavButton  iconValue="notifications" buttonText="Notifications " tabId="5" urlMapping={this.props.urlMapping}
                                toogleActive={this.props.changeActive} currentActive={this.props.currentActiveTab}/>
                <SideNavButton  iconValue="help_outline" buttonText="Help Center" tabId="6" urlMapping={this.props.urlMapping}
                                toogleActive={this.props.changeActive} currentActive={this.props.currentActiveTab}/>
            </div>
            <div className = "sideNavBackground">
            </div>
        </nav>
        );
    }
}
 
export default SideNav;