import React, { Component } from 'react';
import '../css/dashBoard.css';

class DashBoard extends Component {
    render() {
        return (
        <div className="pill-box">
            <a className="pill-box-button pill-schedule">
                <i class="material-icons">
                    schedule
                </i>Pill Schedule   
            </a>
            <a className="pill-box-button pillbox-status">Pill Box Status</a>
            <a className="pill-box-button find-my-pillbox">Find My Pill Box</a>
            <a className="pill-box-button alarm-setting">Alarm Setting</a>
            <a className="pill-box-button family-monitor">Family Monitor</a>
            <a className="pill-box-button adherence-tracker">Adherence Tracker</a>
        </div>);
    }
}
export default DashBoard;
