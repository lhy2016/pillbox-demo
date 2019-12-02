import React, { Component } from 'react';
import ScheduleRow from './scheduleRow';
class PillSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateStr: ""
        };
    }
    componentDidMount() {
        this.tick();
        this.intervalID = setInterval(
             this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick = () => {
        const dateObj = new Date();
        var day = dateObj.getDay();
        var date = dateObj.getDate();
        var month = dateObj.getMonth() + 1;
        var year = dateObj.getFullYear();
        var dayStr = {
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
            7: "Sunday"
        }
        var monStr = {
            1: "January",
            2: "Febrary",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December"
        }
        this.setState({
            dateStr: dayStr[day] + ", " + monStr[month] + " " + date + ", " + year
        });
    }
    render() {
        return(
        <div className="pillSchedule">
            <div className="date">
                <span className="schedule-sideMenu">
                    <i className="material-icons">menu</i>
                </span>
                <span style={{margin:"auto"}}><b>Today</b> <span className="dateShower">{this.state.dateStr}</span></span>
                <span className="datePicker"><i className="material-icons">date_range</i></span>
            </div>
            <ScheduleRow />
        </div>);
    }
}
export default PillSchedule;