import React, { Component } from 'react';
import Header from './components/header';
import MatchInfo from './data/matchInfoData.json';
import UmpireDutyInfo from './data/umpireDutyData.json';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabSection from './components/tabs';
import RulesDialog from './components/rulesDialog';

//import fire from './fire';
//import * as firebase from 'firebase'
//import * as c from './config/constants'

// Initialize Firebase
/*const config = {
  apiKey: c.apiKey,
  authDomain: c.authDomain,
  databaseURL: c.databaseURL,
  projectId: c.projectId,
  storageBucket: c.storageBucket,
  messagingSenderId: c.messagingSenderId
}

firebase.initializeApp(config)


const database = firebase.database()*/
//const auth = firebase.auth()
//const provider = new firebase.auth.FacebookAuthProvider()

//var ref = database.ref();

/*ref.on("value", function(snapshot) {

   var info = snapshot.val()
   console.log(info);

}, function (error) {
    console.log("Error: " + error.code);
});*/


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

    //let app = this.props.db.database().ref('messages');
    /*app.on('value', snapshot => {
      this.getData(snapshot.val());
    });*/
    
  }

  // componentWillUnMount(){
  //   firebase.removeBinding(this.itemsRef);
  // }

  componentDidMount() {
    this.setState({
      matches: MatchInfo,
      umpireDuty: UmpireDutyInfo
    });

  }
  
  render() {
    console.log(this.props.data)
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
