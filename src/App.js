import React from 'react';
import './css/App.css';
import SideNav from './components/sideNav';
import MainPanel from './components/mainPanel';
import {
  BrowserRouter as Router
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSideTab:1,
    };
  }
  changeActive = (tabId) => {
    this.setState({
      activeSideTab: tabId
    });
  }
  render () {
    const tabIdToUrl = {
      1:"/",
      2:"/account",
      3:"pillBox",
      4:"healthcare",
      5:"notification",
      6:"help"
    };
    return (
    <Router>
      <div className="App">
        <SideNav urlMapping={tabIdToUrl} changeActive={this.changeActive} currentActiveTab={this.state.activeSideTab} />
        <MainPanel activeSideTab={this.state.activeSideTab} />
      </div>
    </Router>
    );
  }
}

export default App;
