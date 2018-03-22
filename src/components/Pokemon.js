import React, { Component } from 'react';


class Pokemon extends Component{

  render(){

    return (
          <li className="pokemon-species" key={this.props.index}>
            <div className="pokemon-box">
              <div>
                <img className="pokemon-photo" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} alt={this.props.name} />
              </div>
              <p> {this.props.name}</p>
              <p> {this.props.id}</p>
              <p> {this.props.types}</p>
            </div>
          </li>
      )
    }
}

export default Pokemon;
