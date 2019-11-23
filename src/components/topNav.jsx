import React, { Component } from 'react';
import '../css/topNav.css';

class TopNav extends Component {
    render() {
        return(
            <nav className="topNav">
                <div className="title">
                    {this.props.title}
                </div>
            </nav>
        );
    }
}
export default TopNav;