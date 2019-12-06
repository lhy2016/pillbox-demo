import React, { Component } from 'react';

class XAIDialogue extends Component {
    render() {
        return (<div className="xai-dialogue">
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
    </div>);
    }
}
export default XAIDialogue;