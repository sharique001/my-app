import React, {Component} from "react";
import { LinearProgress } from 'material-ui/Progress';
import Paper from 'material-ui/Paper';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import { withTheme } from 'material-ui/styles';
import {Pie} from 'react-chartjs-2';
import { RingLoader } from 'react-spinners';
import _ from 'lodash';
import ReactSpeedometer from "react-d3-speedometer";


let TwitterComponent = (props) => {
    return <div style = {{fontSize: 20}}> <img src = "/images/wsj.jpg" style = {{height: 60}} /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Score: 50%
    <Paper style = {{overflow: 'auto', height: 72, width: 250, fontSize: 16}}> {props.tweet.text} </Paper> </div>
}

class Analytics extends Component{
    render(){
        const {theme} = this.props;                   
        return (
            !this.props.loaded? 
            <center style = {{marginTop: 30}}> 
                <RingLoader color = {'green'} size = {200}/>
                <p style = {{fontSize: 30}}> Analyzing... </p>    
            </center>: <div style = {{marginLeft: 20}}>
                    <div className = "row" style = {{marginTop: 20}}>
                    <div>
                        <ReactSpeedometer
                        maxValue={1}
                        minValue = {-1}
                        value={0.7}
                        needleColor="red"
                        startColor="green"
                        endColor="blue"
                        textColor="grey"
                    />
                    </div>
                    <div style = {{marginLeft: 450}}>
                    <ReactSpeedometer
                        maxValue={0}
                        minValue = {1}
                        value={0.3}
                        needleColor="black"
                        startColor="blue"
                        endColor="red"
                        textColor="grey"
                    />
                    </div>
                    </div>
                    <div className = "row" style = {{marginTop: -0}}>
                        <div className = "col-md-4">
                            <h4> Top 5 based on sentiment </h4>
                            {_.map(this.props.tweets, tweet => {
                                return <div> 
                                        <TwitterComponent tweet = {tweet}/> 
                                        <br/> 
                                    </div>
                            })}
                        </div>
                        <div className = "col-md-4">
                            <h4> Top 5 based on sentiment </h4>
                            {_.map(_.range(1, 6), (num, index) => {
                                return <div> <TwitterComponent/> <br/> </div>
                            })}
                        </div>
                        <div className = "col-md-4">
                            <h4> Top 5 based on sentiment </h4>
                            {_.map(_.range(1, 6), (num, index) => {
                                return <div> <TwitterComponent/> <br/> </div>
                            })}
                        </div>
                    </div>
                </div>
        )
    }
}

export default withTheme()(Analytics);

