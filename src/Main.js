import React, { Component } from "react";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Tabs, { Tab } from 'material-ui/Tabs';

import Input from './input';
import Output1 from './output1';
import Output2 from './output2';

import _ from 'lodash';


class Main extends Component {
  state = {
      value: 0,
      processed: false,
      loaded1: false,
      loaded2: false,
      submitted1: false,
      submitted2: false,
      articleText: '',
      authorName: '',
      authorOrg: '',
      articleURL: '',
      text: '',
      tweets: [],
      tweetid: '',
  }
  constructor(props){
      super(props);
      this.handleChangeForm = this.handleChangeForm.bind(this);
      this.handleChangeRadio = this.handleChangeRadio.bind(this);

  }

  handleChange = (event, value) => {
    this.setState({value});
  }
  handleSubmit1 = () => {
      this.setState({submitted1: true, loaded1: false, value: 1})
    //   window.setTimeout(() => {
    //       this.setState({loaded1: true})
    //     }, 
    //     2000
    // );
    let data = {
        text: this.state.text
    }
    fetch('http://127.0.0.1:5002/text', 
    {   method: 'post', 
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)})
    .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((myJson) => {
        console.log("result is " , myJson);
        this.setState({loaded1: true, tweets: JSON.parse(myJson)})
      });  
  }

  handleSubmit2 = () => {
    this.setState({submitted2: true, loaded: false, value: 2})
    let selectedTweet = _.filter(this.state.tweets, tweet => tweet.tweetid ==this.state.tweetid)

        fetch('http://127.0.0.1:5002/tweet', 
    {   method: 'post', 
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(selectedTweet)})
    .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((myJson) => {
        console.log("result is " , myJson);
        this.setState({loaded1: true, tweets: JSON.parse(myJson)})
      });  

  //   window.setTimeout(() => {
  //       this.setState({loaded: true})
  //     }, 
  //     2000
  // );
}

    handleChangeRadio = event => {
        console.log("value is ", event.target.value);
        this.setState({tweetid: event.target.value});
    }

  handleChangeForm = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
        <div className = "container">
            <AppBar position="fixed" color="primary">
                <Toolbar>
                <Typography variant="title" color="inherit" style = {{margin: "auto"}}>
                    Unfake!
                </Typography>
                </Toolbar>
            </AppBar>
            <AppBar position = "static" style = {{marginTop: 70, width: 500, 
                textAlign: "center", marginLeft: "auto",
                marginRight: "auto",}}
            >
                <Tabs value={this.state.value} onChange={this.handleChange}>
                    <Tab label="Input" style = {{outline: "none"}}/>
                    <Tab label="Output 1" style = {{outline: "none"}} disabled = {!this.state.submitted1}/>
                    <Tab label="Output 2" style = {{outline: "none"}} disabled = {!this.state.submitted2}/>
                </Tabs>
          </AppBar>
          {this.state.value == 0 ? <Input 
                                        handleSubmit = {this.handleSubmit1}
                                        handleChangeForm = {this.handleChangeForm}  
                                        articleText = {this.state.articleText}
                                        authorName = {this.state.authorName}
                                        text = {this.state.text}
                                        articleURL = {this.state.articleURL}                                      
                                    /> : this.state.value == 1 ? 
                                    <Output1 
                                        loaded = {this.state.loaded1}
                                        articleText = {this.state.articleText}
                                        authorName = {this.state.authorName}
                                        authorOrg = {this.state.authorOrg}
                                        articleURL = {this.state.articleURL}
                                        handleSubmit = {this.handleSubmit2}
                                        tweets = {this.state.tweets}
                                        tweetid = {this.state.tweetid}
                                        handleChange = {this.handleChangeRadio}
                                    /> :
                                    <Output2 
                                        loaded = {this.state.loaded}
                                        articleText = {this.state.articleText}
                                        authorName = {this.state.authorName}
                                        authorOrg = {this.state.authorOrg}
                                        articleURL = {this.state.articleURL}
                                    />}
                
        </div>
    );
  }
}
 
export default Main;