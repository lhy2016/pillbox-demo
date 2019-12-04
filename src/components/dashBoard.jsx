import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import '../css/dashBoard.css';

class DashBoard extends Component {
    chartReference = {};
    componentDidMount() {
        console.log(this.chartReference); // returns a Chart.js instance reference
    }
    render() {
        const weightData = [162.4, 165.4, 162.8, 161, 163.6, 165.6, 163];
        const data = (canvas) => {
            const ctx = canvas.getContext("2d");
            const gradient = ctx.createLinearGradient(0,0,500,0);
            for (var i = 1; i < weightData.length;i++) {
                if (weightData[i] - weightData[i-1] >= 2) {
                    gradient.addColorStop(1.0 * i / (weightData.length - 1), "red");
                } else {
                    gradient.addColorStop(1.0 * i / (weightData.length - 1), "cyan");
                }
            }
            if (weightData[1] - weightData[0] >= 2) {
                gradient.addColorStop(0, "red");
            } else {
                gradient.addColorStop(0, "cyan");
            }
            return {
            labels: ['Nov 28', 'Nov29', 'Nov 30', 'Dec 1', 'Dec 2', 'Dec 3', 'Dec 4'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1, 
                borderColor: gradient,
                borderCapStyle: 'butt',
                borderJoinStyle: 'round',
                pointBorderColor: '#000000',
                pointBackgroundColor: '#ffffff',
                pointBorderWidth: 1,
                pointHoverRadius: 4,
                pointHoverBackgroundColor: '#00ff00',
                pointHoverBorderColor: '#ff0000',
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 0,
                data: weightData
              }
            ]
            }
        };
        const options = {
            scales: {
                yAxes:[{
                    ticks:{
                        suggestedMin:140
                    }
                }]
            }
        };
        return (
        <div className="dashBoard">
            <div className="patient-title">
                <span className="MRI"><b>MRN#:</b> 101</span>
                <span className="patient-Name"><b>Patient Name:</b> Patient 1</span>
                <span className="chronic-pathway"><b>Chronic Disease Pathway: </b>
                    CHF
                </span> 
            </div>
            <div style={{borderTop:"1px solid #dddddd"}}></div>
            <div className="row">
                <div className="dashBoard-sideMenu col-xl-3 col-lg-3 col-md-4">
                    <div className="lastReading">
                        <div style={{marginBottom:"7px"}}>Last Reading</div>
						<div className="meters"><span className="meter-name">Weight Scale:</span> 75kg</div>
						<div className="meters"><span className="meter-name">BP Monitor:</span> 110mm Hg</div>
						<div className="meters"><span className="meter-name">Oximeter(Pulse):</span> 80bpm</div>
						<div className="meters"><span className="meter-name">Oximeter(SpO2):</span> 93%</div>
                    </div>
                    <div className="xai-dialogue">
                        <div className="xai-title">XAI-Dialogue</div>
                        <div className="dialogue-container">
                            <div className="ai-message">
                                <div className="leftArrow"></div>
                                Hi, Patient 1, how are you feeling today?
                            </div>
                            <div className="patient-message">
                                <div className="rightArrow"></div>
                                I still have minor chest pain and headache.
                            </div>
                            <div className="ai-message">
                                <div className="leftArrow"></div>
                                It seems that you didn't take your Aspirin pill this morning. Did you 
                                forget?
                            </div>
                            <div className="patient-message">
                                <div className="rightArrow"></div>
                                Oh, sorry! I forgot.
                            </div>
                            <div className="ai-message">
                                <div className="leftArrow"></div>
                                No problem. Remember to take your pills on time. Take good rest and drink enough warm water.
                                You are expected to get better in 2 days.
                            </div>
                             <div className="patient-message">
                                <div className="rightArrow"></div>
                                Sure. No problem. Thanks!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="graph-container col-xl-9 col-lg-9 col-md-8">
                    <div className="row">
                        <div className="col-xl-6"> <Line ref={(reference) => this.chartReference = reference } data={data} height={200} options={options} /></div>
                        <div className="col-xl-6"><Line data={data} height={200} /></div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6"><Line data={data} height={200} /></div>
                        <div className="col-xl-6"><Line data={data} height={200} /></div>
                    </div>
                </div>
            </div>
         
        </div>
       
        );
    }
}
export default DashBoard;
