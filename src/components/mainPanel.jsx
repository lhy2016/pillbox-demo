import React, { Component } from 'react';
import TopNav from './topNav';
import '../css/mainPanel.css';
import PillBox from './pillBox';

class MainPanel extends Component {
    render() {
        return (<div className="main-panel"> 
                    <TopNav />
                    <PillBox />
                </div>);
    }
}
export default MainPanel;