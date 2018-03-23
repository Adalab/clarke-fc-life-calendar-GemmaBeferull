import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Footer from './footer';


class Editor extends Component {
constructor(props) {
  super(props);
  this.state = {
    option: ''
  };
  this.handleChange = this.handleChange.bind(this);
}

handleChange(e) {
  var selected = document.querySelector('input[name="options"]:checked').value;
  this.setState({
    option: e.currentTarget.value
  });
}

render() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

    if(day < 10) {
      day = '0' + day;
        }

        if(month < 10) {
          month = '0' + month;
        }

        let today = day + '/' + month + '/' + year;

        const showMessage = this.state.hidden ? 'hidden' : '';

        return (
          <div className="editor-container">
          <div className="header">
          ¿Cómo ha ido el día?
          </div>
              <div className="date-container">
                <input className="date" type="text" value={`${today}`} disabled="disabled"/>
              </div>
              <h1>Selecciona una opción</h1>
              <form className= "flex">
                <label for="o1"><input type="radio" value=":)" id="o1" name="options" onChange={this.handleChange}/> :)</label>
                <label for="o2"><input type="radio" value=":(" id="o2" name="options" onChange={this.handleChange} /> :(</label>

              </form>
              <div>Marcado: <span>{this.state.option}</span></div>
          <h1> Mensaje </h1>


          <form>
               <label for="message"></label>
               <textarea name="message" id="message" rows="4" cols="30" placeholder="¿Por que es un buen día?" onChange={this.props.onChangeUpdateText} value={this.props.textareaText} disabled={this.props.disabled}></textarea>
               </form>


          <Link to="/" style={{ textDecoration: 'none' }} className= "flex">
            <button type="button" name="button" className="saveButton">Guardar</button>
            <button type="button" name="button" className="cancelButton">Cancelar</button>
          </Link>
          <Footer/>
        </div>

      );
    }
  }







  export default Editor;
