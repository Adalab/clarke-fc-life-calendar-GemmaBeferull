import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Editor from './editor';

class Calendar extends Component {


    render() {

      return (
        <div>
        <Link to="/editor" style={{ textDecoration: 'none' }}>
        <div className="gotocalendar">
        +
        </div>
        </Link>
        <div>
        </div>
        </div>


      );
    }
  }

  export default Calendar;
