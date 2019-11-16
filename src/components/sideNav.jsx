import React, { Component } from 'react';
import '../css/sideNav.css';
import SideNavButton from '../components/sideNavButton';



class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentActive: 1,
        };
    }
    toogleActive(tabId) {
        this.setState({
            currentActive: tabId
        })
    }
    render() {
        var toogleActive = this.toogleActive; 
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
                <SideNavButton  iconValue="dashboard" buttonText="Dashboard" tabId="1" 
                                toogleActive={toogleActive.bind(this)} currentActive={this.state.currentActive} />
                <SideNavButton  iconValue="person" buttonText="My Account" tabId="2"
                                toogleActive={toogleActive.bind(this)} currentActive={this.state.currentActive}/>
                <SideNavButton  iconValue="local_hospital" buttonText="Pill Box" tabId="3"
                                toogleActive={toogleActive.bind(this)} currentActive={this.state.currentActive}/>
                <SideNavButton  iconValue="favorite" buttonText="Healthcare" tabId="4"
                                toogleActive={toogleActive.bind(this)} currentActive={this.state.currentActive}/>
                <SideNavButton  iconValue="notifications" buttonText="Notifications " tabId="5"
                                toogleActive={toogleActive.bind(this)} currentActive={this.state.currentActive}/>
                <SideNavButton  iconValue="help_outline" buttonText="Help Center" tabId="6"
                                toogleActive={toogleActive.bind(this)} currentActive={this.state.currentActive}/>
            </div>
            <div className = "sideNavBackground">
            </div>
        </nav>
        );
    }
}
 
export default SideNav;