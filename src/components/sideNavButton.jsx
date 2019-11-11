import React, { Component } from 'react';
import '../css/sideNav.css'

class SideNavButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            tabId: props.tabId
        };
    }
    render() { 
        var toogleActive = this.props.toogleActive;
        var currentActive = this.props.currentActive;
        return (
            <button onClick={() => toogleActive(this.state.tabId)}
                    className={this.state.tabId == currentActive ? "active": "default"}>
                    <i className="material-icons">{this.props.iconValue}</i>
                    {this.props.buttonText}
            </button>
        );
    }
}
export default SideNavButton;