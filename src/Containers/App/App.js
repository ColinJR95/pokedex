import './App.scss';
import React, { Fragment } from 'react';
import CardList from '../../Components/CardList/CardList';
// import ErrorBoundary from '../Components/ErrorBoundary';
import SearchBox from '../../Components/SearchBox/SearchBox';
// import Scroll from '../Components/Scroll';
import axios from 'axios';
import Pagination from 'react-js-pagination';

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			pokemons: [],
            searchfield:'',
            offset: 0,
      		data: [],
     		perPage: 5,
      		currentPage: 0,
      		activePage: 1
		}
	}


	componentDidMount() {
    const interval = {
      limit: 25,
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


    handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
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
                      <div>
       				 	<Pagination
				          activePage={this.state.activePage}
				          itemsCountPerPage={10}
				          totalItemsCount={450}
				          pageRangeDisplayed={5}
				          onChange={this.handlePageChange.bind(this)}
				        />
				      </div>
                    <footer className="pv2 ph3 ph5-m ph6-l mid-gray">
                      <small className="f6 db tc">© 2020 Made by <b className="ttu">Javier Colin</b></small>
                    </footer>
                </Fragment>
		)
	}
}


export default App;