import React, { Component } from 'react';
class ScheduleRow extends Component {
    render() {
        return(
            <div className="scheduleRow">
                <div className="pillName">
                        Aspirin 5mg
                </div>
                <div className="Instruction">
                    Take 2 tablets by mouth everyday
                </div>
                <div className="timeOfDayIconContainer">
                    <div className="morning timeOfDay"></div>
                </div>
               
            </div>
        );
    }
}
export default ScheduleRow;