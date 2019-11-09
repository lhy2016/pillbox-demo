import React from 'react';
import './css/App.css';
import SideNav from './components/sideNav';

class App extends React.Component {
  render () {
    return (
    <div className="App">
      <SideNav />
    </div>
    );
  }
}

export default App;
