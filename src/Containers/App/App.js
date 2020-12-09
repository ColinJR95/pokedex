import './App.scss';
import React, { Fragment, Component } from 'react';
import CardList from '../../Components/CardList/CardList';
// import ErrorBoundary from '../Components/ErrorBoundary';
import SearchBox from '../../Components/SearchBox/SearchBox';
// import Scroll from '../Components/Scroll';

class App extends React.Component {
	constructor () {
		super();
		this.state = {
			 pokemons: [],
            searchfield:''
		}
	}


	componentDidMount() {
    const interval = {
      limit: 20,
      offset: 1
    }
    const Pokedex = require('pokedex-promise-v2');
    const P = new Pokedex();
    P.getPokemonsList(interval)
    .then(response => {
        const urls = response.results.map(result => result.url);
        
        Promise.all(urls.map(u => fetch(u)))
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(monsters => {
            this.setState({ pokemons: monsters });
        });
    });
  }

      onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

	render() {
		const { pokemons, searchfield } = this.state;
        const filteredPokemons = pokemons.filter(pokemon => pokemon.forms[0].name.toLowerCase().includes(searchfield.toLowerCase()));
      

		return (
	      	<Fragment>
              <div className='tc'>
                   <div className="flex items-center justify-center">
                         <h1 className='f1 pa3 w6 br2 ba b--dark-red bg-yellow ma2'>FullStack Pokedex</h1>
                    </div>
                        <SearchBox searchChange={this.onSearchChange}/>                       
                        <CardList pokemons={filteredPokemons}/>
                    </div>
                    <footer className="pv2 ph3 ph5-m ph6-l mid-gray">
                      <small className="f6 db tc">© 2020 Made by <b className="ttu">Javier Colin</b></small>
                    </footer>
                </Fragment>
		)
	}
}


export default App;