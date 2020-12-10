import React, { useState, useEffect } from 'react';
import CardList from '../../Components/CardList/CardList';
import './App.scss';
import SearchBox from '../../Components/SearchBox/SearchBox';
import Pokemon from '../../Components/Pokemon/Pokemon'
import {useHistory} from 'react-router-dom'



function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchField, setSearchField] = useState('');
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'
  const history = useHistory();


   function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    });
}
 
   async function getAllPokemon(url) {
      return new Promise((resolve, reject) => {
          fetch(url).then(res => res.json())
              .then(data => {
                  resolve(data)
              })
      });
  }

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }



  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  const onSearchChange = e => setSearchField(e.target.value);

  const filteredPokemons = pokemonData.filter(pokemon => pokemon.forms[0].name.toLowerCase().includes(searchField.toLowerCase()));


  return (
    <>

      <div>
        {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
          <>
            <div className="flex items-center justify-center">
              <h1 className='f1 pa3 w6 br2 ba b--dark-red bg-yellow ma2'>FullStack Pokedex</h1>
            </div>
            
            <div className= 'flex items-center justify-center' >
               <SearchBox searchChange={onSearchChange}/>
            </div>
            
            <div className="btn">
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
            </div>
            <div className="flex items-center justify-center">
              <Pokemon />
               <CardList pokemon={filteredPokemons} onClick = {() => history.push(`/${filteredPokemons.id}`)}/>

            </div>
            <div className="btn">
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;