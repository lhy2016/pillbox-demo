import React, { Component } from 'react';
import {Line, Chart} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import XAIDialogue from './xaiDialogue';
import '../css/dashBoard.css';

class DashBoard extends Component {

    weightReference = {};
    
    componentWillMount() {
        Chart.pluginService.register({
            beforeRender: function(chartInstance) {
                console.log("beforeRender");
                console.log(chartInstance);
                var chartLeft = chartInstance.chartArea.left;
                var chartRight = chartInstance.chartArea.right;
                var context = chartInstance.chart.ctx
                var gradient = context.createLinearGradient(chartLeft,0,chartRight,0);
                var weightData = chartInstance.data.datasets[0].data;
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
                console.log(gradient);
                chartInstance.data.datasets[0].borderColor = gradient;
                console.log(chartInstance.data.datasets[0].borderColor);
            },
            beforeUpdate: function(chartInstance) {
                console.log("beforeUPdate");
            }
        });
    }
    componentDidMount() {
        console.log("componentDidMount()");
        Chart.plugins.unregister(ChartDataLabels);
        /* console.log(this.weightReference); */
        window.addEventListener("resize", ()=>{});
    }

    render() {
        const Data = [162.4, 163.4, 162.8, 161, 163.6, 165.6, 163];
    
        const data = (canvas) => {
            return {
            labels: ['Nov 28', 'Nov 29', 'Nov 30', 'Dec 1', 'Dec 2', 'Dec 3', 'Dec 4'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.34, 
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
                data: Data
              }
            ]
            }
        };
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
                    <XAIDialogue />
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
