import React, { Component } from 'react';
import './App.css';
import Calendar from './components/calendar';
import Editor from './components/editor';



  import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
  import { withRouter } from 'react-router';



  const App = () => (
  	<Router>
  		<Switch>
  			<Route exact path="/"	component={Calendar} />
        <Route	path="/editor"	component = {Editor} />
  		</Switch>
  	</Router>
  );



  export default App;
