import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import '../css/dashBoard.css';

class DashBoard extends Component {
    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
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
                <div className="dashBoard-sideMenu col-xl-2 col-lg-3 col-md-4">
                    <div className="lastReading">
                        Last Reading
                    </div>
                </div>
                <div className="graph-container col-xl-10 col-lg-9 col-md-8">
                    <div className="row">
                        <div className="col-xl-6"> <Line data={data} /></div>
                        <div className="col-xl-6"><Line data={data} /></div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6"> <Line data={data} /></div>
                        <div className="col-xl-6"><Line data={data} /></div>
                    </div>
                </div>
            </div>
         
        </div>
       
        );
    }
}
export default DashBoard;
