import React from 'react';
import './Card.scss';
import Tilt from 'react-tilt'
import Pokemon from '../Pokemon/Pokemon';

const color = {
    'ice': '#98D8D8',
    'normal': '#A8A878',
    'fire': '#F08030',
    'fighting': '#C13928',
    'water': '#6890F0',
    'flying': '#A890F0',
    'grass': '#78C850',
    'poison': '#A250A1',
    'electric': '#F8D031',
    'ground': '#E0C068',
    'psychic': '#ED5887',
    'rock': '#B8A038',
    'bug': '#A8B820',
    'dragon': '#7A70F8',
    'ghost': '#705898',
    'dark': '#705848',
    'steel': '#B8B8D0',
    'fairy': '#EE99AC',
    'default': '#68A090'
}

function Card({ name, type, sprite, id, setId}) {


    return (
        <Tilt className="Tilt pa2">
            <div className="Tilt-inner tc w5 bg-red dib br3 pa3 ma2 dim bw2 shadow-5 pointer">
                <div onClick = {() => setId(id)} className="flex flex-column items-center">
                    <img src={sprite} className='bg-light-yellow br-100 ba b--black-10' alt={`${name}`}/>             
                    <h2 className="bg-yellow br1 ma2 pa2">{name}</h2>
                    <div className="h3 flex flex-column justify-center">
                        {type.map(element => (<p style={{backgroundColor: color[element]}} className={`ma1 br2 ba b--black-30 pa1 bg-${element}`}>{element}</p>)
                
                            )}
                    </div>
                </div>
            </div>
        </Tilt>
    );
}

export default Card;