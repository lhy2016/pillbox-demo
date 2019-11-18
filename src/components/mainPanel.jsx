import React, { Component } from 'react';
import TopNav from './topNav';
import '../css/mainPanel.css';

class MainPanel extends Component {
    render() {
        return (<div className="main-panel"> 
                    <TopNav />
                    
                </div>);
    }
}
export default MainPanel;