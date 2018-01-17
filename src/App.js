import React, { Component } from 'react';
import Header from './components/header';
import MatchInfo from './components/matchInfo';
import Info from './data/data.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title : 'TON',
      description:"Here you go, check out the complete match schedules - Jan 2018",
      matches : []
      }
  }

  componentDidMount() {
    this.setState({
      matches: Info
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header title={this.state.title} description={this.state.description}/>
        <div className="container">
          <MatchInfo info={this.state.matches}/>
        </div>
      </div>
    );
  }
}

export default App;
