import React, { Component } from 'react';
class PillSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateStr: ""
        };
    }
    componentDidMount() {
        console.log("mounted");
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
            dateStr: dayStr[day] + ", " + date + " " + monStr[month]
        });
    }
    render() {
        return(
        <div className="pillSchedule">
            <div className="date">
        <b>Today</b> <span className="dateShower">{this.state.dateStr}</span>
            </div>
        </div>);
    }
}
export default PillSchedule;