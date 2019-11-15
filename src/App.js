import React from 'react';
import './css/App.css';
import SideNav from './components/sideNav';
import TopNav from './components/topNav';
import MainPanel from './components/mainPanel';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSideTab:1,
    };
  }
  render () {
    return (
    <div className="App">
      <SideNav />
      <MainPanel activeSideTab={this.state.activeSideTab} />
    </div>
    );
  }
}

export default App;
