import React from 'react';
import './css/App.css';
import SideNav from './components/sideNav';
import TopNav from './components/topNav';
import MainPanel from './components/mainPanel';

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
      <MainPanel />
    </div>
    );
  }
}

export default App;
