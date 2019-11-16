import React, { Component } from 'react';
import TopNav from './topNav';
import PillBox from './pillBox';
import '../css/mainPanel.css';

class MainPanel extends Component {
    render() {
        return (<div className="main-panel"> 
                    <TopNav />
                    <PillBox />
                </div>);
    }
}
export default MainPanel;