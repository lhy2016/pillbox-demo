import React, { Component } from 'react';
import {Line, Chart} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import '../css/dashBoard.css';

class DashBoard extends Component {
    weightReference = {};
    componentDidMount() {
        Chart.plugins.unregister(ChartDataLabels);
        /* console.log(this.weightReference); */
        window.addEventListener("resize", ()=>{});
    }

    renderGradient = (weightData, gradient) => {
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
    }

    render() {
        const weightData = [162.4, 163.4, 162.8, 161, 163.6, 165.6, 163];
        const plugins = [ChartDataLabels];
        const options = {
            plugins: {
                datalabels: {
                   display: function(ctx) {
                    return ctx.dataIndex === ctx.dataset.data.length - 1;
                   },
                   
                   color: 'black',
                   formatter : function(value, context) {
                       return "Current: \n" + value + " lbs";
                   },
                   anchor: 'start',
                   align: 'left',
                   textAlign:'left'
                }
            },
            title: {
                display: true,
                text: 'Weight last week (lbs)',
                fontSize: 14
            },
            scales: {
                yAxes:[{
                    ticks:{
                        suggestedMin:150
                    }
                }]
            },
            legend: {
                position: 'top',
                align:'end'
            }
        };
        const data = (canvas) => {
            const context = canvas.getContext("2d");
            console.log(canvas.clientWidth);    
            const gradient = context.createLinearGradient(0,0,460,0);
            this.renderGradient(weightData, gradient);
            return {
            labels: ['Nov 28', 'Nov 29', 'Nov 30', 'Dec 1', 'Dec 2', 'Dec 3', 'Dec 4'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.34, 
                borderColor: gradient,
                borderCapStyle: 'butt',
                borderJoinStyle: 'round',
                pointBorderColor: '#777777',
                pointBackgroundColor: '#ffffff',
                pointBorderWidth: 1,
                pointHoverRadius: 3,
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
                        <div className="col-xl-6"> <Line ref={(reference) => {this.weightReference = reference} } 
                             data={data} height={200} options={options} plugins={plugins}/></div>
                        <div className="col-xl-6">{/*<Line data={data} height={200} /> */}</div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6">{/*<Line data={data} height={200} /> */}</div>
                        <div className="col-xl-6">{/*<Line data={data} height={200} /> */}</div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default DashBoard;
