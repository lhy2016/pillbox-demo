import React, { Component } from 'react';
import '../css/sideNav.css'
import {Link} from 'react-router-dom';
class SideNavButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabId: props.tabId
        };
    }
    render() { 
        var toogleActive = this.props.toogleActive;
        var currentActive = this.props.currentActive;
        return (
            <Link to={this.props.urlMapping[this.state.tabId]} onClick={() => toogleActive(this.state.tabId)}
                    className={this.state.tabId == currentActive ? "active": "default"}>
                    <i className="material-icons">{this.props.iconValue}</i>
                    {this.props.buttonText}
            </Link>
        );
    }
}
export default SideNavButton;