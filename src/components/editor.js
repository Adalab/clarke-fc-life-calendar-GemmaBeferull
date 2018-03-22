import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

class Editor extends Component {

    render() {

      return (
        <div>
        <p> Fecha </p>
          <select>
            <option value="volvo">1</option>
            <option value="saab">2</option>
            <option value="mercedes">3</option>
            <option value="audi">4</option>
          </select>
          <p> Estado </p>
          <input type="text" name="" value=""/>
          <input type="text" name="" value=""/>
          <p> Mensaje </p>
          <input type="text" name="" value=""/>

        </div>

      );
    }
  }

  export default Editor;
