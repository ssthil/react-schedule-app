import React, { Component } from 'react';
import Header from './components/header';
import MatchInfo from './data/matchInfoData.json';
import UmpireDutyInfo from './data/umpireDutyData.json';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabSection from './components/tabs';
import RulesDialog from './components/rulesDialog';

import fire from './fire';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title : 'TON',
      description:"Here you go, check out the complete match schedules - Jan 2018",
      matches : [],
      umpireDuty:[],
      items: []
    }
    
  }

  componentWillUnMount(){
    fire.removeBinding(this.itemsRef);
  }

  componentDidMount() {
    this.setState({
      matches: MatchInfo,
      umpireDuty: UmpireDutyInfo
    });

  }
  
  render() {
    
    return (
      <div className="App">
        <Header title={this.state.title} description={this.state.description}/>
        <div className="container">
          <MuiThemeProvider>
              <TabSection info={this.state.matches} umpireDutyInfo = {this.state.umpireDuty} jerseyInfo={this.state.jerseyInfo}/>
          </MuiThemeProvider>
          <MuiThemeProvider>
              <RulesDialog />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
