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
                    <div className="morning timeOfDay">
                        <div className="doseVolume volumeMorning">1</div>
                    </div>
                    <div className="noon timeOfDay"></div>
                    <div className="evening timeOfDay">
                    <div className="doseVolume volumeEvening">1</div>
                    </div>
                    <div className="night timeOfDay"></div>
    
                </div>
               
            </div>
        );
    }
}
export default ScheduleRow;