import React, { Component } from 'react';
import '../css/pillBox.css';
import PillSchedule from './pillSchedule';

class PillBox extends Component {
    render() {
        return(
            <div className="pillBox-container">
                <PillSchedule />
            </div>
        );
    }
}
export default PillBox;