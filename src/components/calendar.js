import React, { Component } from 'react';
import { BrowserRouter as  Route, Link } from 'react-router-dom';
import Footer from './footer';


class Calendar extends Component {


    render() {

      return (
        <div>
        <Link to="/editor" style={{ textDecoration: 'none' }}>
        <div className="header">
        +
        </div>
        </Link>
        <div className="smileyCalendar">
        </div>
        <Footer/>
        </div>


      );
    }
  }

  export default Calendar;
