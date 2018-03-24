import React, { Component } from 'react';
import './App.css';
import Calendar from './components/calendar';
import Editor from './components/editor';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      happy:false,
      sad:false,
      text:'',
      calendarMoodList:[]
    };
  }

  updateText= (e)=> {
    this.setState({
      text:e.value
    })
  }

  selectSad= (e) => {
    this.setState({
      sad: true,
      happy: false
    });
    return (
    <div className="sad">
    <p className="center">:(</p>
     </div>
  )
  }

  selectSmile= (e) => {
    this.setState({
      sad: false,
      happy: true
    });
  }
  printHappy= (e) => {
    return (
    <div className="smile">
    <p className="center">:)</p>
     </div>
  )
  }
  printSad= (e) => { return (
  <div className="sad">
  <p className="center">:(</p>
   </div>
)
}
pushCancelButton= () => {


this.setState({
  sad: false,
  happy: false
})
}

  handleClickRenderMood = () => {


  this.setState({
    calendarMoodList : 'hello'
  })
}

    render() {
      const happyprint= this.state.happy ? this.printHappy(): '';
      const sadprint= this.state.sad ? this.printSad(): '';
      return (
  	<Router>
  		<Switch>
  			<Route exact path="/"	render = {(props) =>
                 <Calendar
                  sadDay={sadprint}
                  happyDay={happyprint}
                  />}
                  />
               <Route path='/editor' render = {(props) =>
                 <Editor
                 printSad={this.selectSad}
                 printSmile={this.selectSmile}
                 updateText={this.updateText}
                 textContent={this.state.text}
                 pushSaveButton={this.handleClickRenderMood}
                 pushCancelButton={this.pushCancelButton}

                   />}
                    />
  		</Switch>
  	</Router>
  )
}
}

  export default App;
