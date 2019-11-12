import React from 'react';
import './css/App.css';
import SideNav from './components/sideNav';
import TopNav from './components/topNav';

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
      <TopNav />
    </div>
    );
  }
}

export default App;
