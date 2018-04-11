import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

const styles = {
    textField: {
        width: 250
    },
    textArea: {
        width: 600
    },
    paper: {
        paddingBottom: 50,
        height: 350
    }
}
export default class Input extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        return (
            <Paper style = {styles.paper}>
                <img src = "/images/searchIcon.jpg" style = {{height: 250, width: 300, marginTop: 40}}/>
                <div className = "row">
                    <TextField
                        label = "Search by Text"
                        style = {{left: 370, width: 250, marginTop: -150}}
                        value = {this.props.text}
                        onChange = {this.props.handleChangeForm('text')}
                    />
                    <Button variant = "raised" 
                        color="primary" 
                        onClick = {this.props.handleSubmit}
                        style = {{left: 450, marginTop: -135, height: 30}}
                    >
                        Search
                    </Button>
                </div>
            </Paper>
        )
    }
}