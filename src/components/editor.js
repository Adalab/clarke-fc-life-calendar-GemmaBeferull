import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Footer from './footer';


class Editor extends Component {
constructor(props) {
  super(props);
  this.state = {
    hidden: true
  };
}

hideTextArea= (e) => {
  this.setState({
    hidden: true
  });
}

showTextArea= (e) => {
  this.setState({
    hidden: false
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
                <label for="o1"><input type="radio" value=":)" id="o1" name="options" className="label" onChange={this.showTextArea} onClick={this.props.printSmile} /> :)</label>
                <label for="o2"><input type="radio" value=":(" id="o2" name="options" className="label" onChange={this.hideTextArea} onClick={this.props.printSad} /> :(</label>

              </form>

          <div className={`${showMessage}`}>
          <h1> Mensaje </h1>
          <form>
               <label for="message"></label>
               <textarea name="message" id="message" rows="4" cols="30" placeholder="¿Por que es un buen día?" onChange={this.props.UpdateText} value={this.props.textContent} ></textarea>
          </form>

</div>

          <Link to="/" style={{ textDecoration: 'none' }} className= "flex">
            <button type="button" name="button" className="saveButton" onClick={this.props.pushSaveButton} >Guardar</button>
            <button type="button" name="button" className="cancelButton" onClick={this.props.pushCancelButton} >Cancelar</button>
          </Link>
          <Footer/>
        </div>

      );
    }
  }

  export default Editor;
