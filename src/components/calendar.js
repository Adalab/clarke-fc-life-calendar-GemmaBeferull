import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
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
        {this.props.moodDay}
        </div>
        <Footer/>
        </div>


      );
    }
  }

  export default Calendar;
