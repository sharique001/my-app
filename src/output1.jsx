import React, {Component} from "react";
import { LinearProgress } from 'material-ui/Progress';
import Paper from 'material-ui/Paper';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import { withTheme } from 'material-ui/styles';
import {Pie} from 'react-chartjs-2';
import { RingLoader } from 'react-spinners';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';

import _ from 'lodash';

let TwitterComponent = (props) => {
console.log("props.tweet = ", props.tweet)
    return <div style = {{fontSize: 20}}> <img src = "/images/wsj.jpg" style = {{height: 60}} /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Score: 50%
    <Paper style = {{overflow: 'auto', height: 72, width: 250, fontSize: 16}}> {props.tweet.text} </Paper> </div>
}

class Output1 extends Component{
    state = {
        value: ""
    }

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        console.log("value is ", event.target.value);
        this.setState({value: event.target.value});
    }

    render(){     
        return (
            !this.props.loaded? 
            <center style = {{marginTop: 30}}> 
                <RingLoader color = {'green'} size = {200}/>
                <p style = {{fontSize: 30}}> Analyzing... </p>    
            </center>: 
            <div className = "row">             
                <div className = "row col-md-9" style = {{marginTop: 20}}>
                    {_.map(this.props.tweets, (tweet) => {
                        return ( <div className = "col-md-4">
                                <TwitterComponent tweet = {tweet}/>
                                <Radio value = {tweet.tweetid} checked = {tweet.tweetid == this.props.tweetid} onChange = {(event, checked) => this.props.handleChange(event, checked)}/>
                    </div> )
                    })}
                    </div>
                    <div className = "col-md-3">
                        <Button variant = "raised" 
                            color="primary" 
                            onClick = {this.props.handleSubmit}
                            style = {{marginLeft: 140, marginTop: 70, height: 50, width: 120}}
                        >
                            Send
                        </Button>
                    </div>    
                </div>
                )
    }
}

export default withTheme()(Output1);

