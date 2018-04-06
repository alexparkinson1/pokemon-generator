import React, { Component } from 'react';
import PokeView from './Components/PokeView';
import Pokemon from './Pokemon';
import './App.css';
const API = 'https://www.pokeapi.co/api/v2/pokemon/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  render() {
    return (
      <div className='App'>
        <button onClick={this.handleOnClick}>RANDOM POKEMON</button>
        <section className='poke-view'>
          <PokeView pokemon={this.state.pokemon} />
        </section>
        <div className='loader hidden'>Loading...</div>
      </div>
    );
  }


  handleOnClick() {
    let id = Math.floor(Math.random() * 151) + 1
    this.toggleLoader();

    fetch(API + id)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);
        this.setState({ pokemon });
        this.toggleLoader();
      })
      .catch(err => console.log(err));
  }

  toggleLoader() {
    var loaderClasses = document.querySelector('.loader').classList,
        pokeViewClasses = document.querySelector('.poke-view').classList;

    if (loaderClasses.contains('hidden')) {
      loaderClasses.remove('hidden');
      pokeViewClasses.add('hidden');
    } else {
      loaderClasses.add('hidden');
      pokeViewClasses.remove('hidden');
    }
  }


}

export default App;
