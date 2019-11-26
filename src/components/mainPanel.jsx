import React, { Component } from 'react';
import TopNav from './topNav';
import '../css/mainPanel.css';
import PillBox from './pillBox';
import DashBoard from './dashBoard';
import {Route} from 'react-router-dom';

class MainPanel extends Component {
    render() {
        return (<div className="main-panel"> 
                    <TopNav title={this.props.tabIdToTitle[this.props.activeSideTab]}/>
                    <div className="main-content">
                        <Route exact path="/">
                            <DashBoard />
                        </Route>
                        <Route path="/pillBox">
                            <PillBox />
                        </Route>
                    </div>
                </div>);
    }
}
export default MainPanel;