import React, { Component } from "react";
import "./App.css";
import Calendar from "./components/calendar";
import Editor from "./components/editor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      happy: false,
      sad: false,
      disabled: false,
    };
  }

  selectSad = e => {
    this.setState({
      sad: true,
      happy: false,
      disabled: true,
    });
  };

  selectSmile = e => {
    this.setState({
      sad: false,
      happy: true,
      disabled: true
    });
  };

  printHappy = () => {
    return (
      <div className="smile">
        <p className="center">:)</p>
      </div>
    );
  };

  printSad = () => {
    return (
      <div className="sad">
        <p className="center">:(</p>
      </div>
    );
  };

  pushCancelButton = () => {
    this.setState({
      sad: false,
      happy: false,
      disabled: false
    });
  };

  componentWillMount(nextProps, nextState) {
     localStorage.getItem('happy') && this.setState({
       happy: JSON.parse(localStorage.getItem('happy'))
     });
     localStorage.getItem('sad') && this.setState({
       sad: JSON.parse(localStorage.getItem('sad'))
     });
     localStorage.getItem('disabled') && this.setState({
       disabled: JSON.parse(localStorage.getItem('disabled'))
     });
   }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('happy', JSON.stringify(nextState.happy));
    localStorage.setItem('sad', JSON.stringify(nextState.sad));
    localStorage.setItem('disabled', JSON.stringify(nextState.disabled));
  }

  render() {
    const happyprint = this.state.happy ? this.printHappy() : "";
    const sadprint = this.state.sad ? this.printSad() : "";
    const resume = this.state.happy ? happyprint : sadprint;
    const disabled = this.state.disabled ? 'disabled' : '';

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              <Calendar
                moodDay={resume}
              />}
          />
          <Route
            path="/editor"
            render={props => (
              <Editor
                disabled={disabled}
                printSad={this.selectSad}
                printSmile={this.selectSmile}
                pushCancelButton={this.pushCancelButton}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
