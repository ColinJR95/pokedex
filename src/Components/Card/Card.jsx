import React from 'react';
import './Card.scss';
import Tilt from 'react-tilt'
import {useHistory } from 'react-router-dom'

function Card({ name, type, sprite, id }) {
    const history = useHistory();
    return (
        <Tilt className="Tilt pa2">
            <div className="Tilt-inner tc w5 bg-red dib br3 pa3 ma2 dim bw2 shadow-5 pointer">
                <div onClick = {() => history.push(`https://pokeapi.co/api/v2/pokemon/${id}`)} className="flex flex-column items-center">
                    <img src={sprite} className='bg-light-yellow br-100 ba b--black-10' alt={`${name}`}/>             
                    <h2 className="bg-yellow br1 ma2 pa2">{name}</h2>
                    <div className="h3 flex flex-column justify-center">
                        {type.map(element => {
                            switch(element) {
                                case 'water':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-water">{element}</p>
                                case 'grass':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-grass">{element}</p>
                                case 'poison':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-poison">{element}</p>
                                case 'fire':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-fire">{element}</p>
                                case 'flying':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-flying">{element}</p>
                                case 'bug':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-bug">{element}</p>
                                case 'fighting':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-fighting">{element}</p>
                                case 'normal':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-normal">{element}</p>
                                case 'dragon':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-dragon">{element}</p>
                                case 'rock':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-rock">{element}</p>
                                case 'ground':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-ground">{element}</p>
                                case 'electric':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-electric">{element}</p>
                                case 'psychic':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-psychic">{element}</p>
                                case 'ghost':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-ghost">{element}</p>
                                case 'fairy':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-fairy">{element}</p>
                                case 'dark':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-dark">{element}</p>
                                case 'steel':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-steel">{element}</p>
                                case 'ice':
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-ice">{element}</p>
                                default:
                                    return <p className="ma1 br2 ba b--black-30 pa1 bg-default">{element}</p>
                            }
                        })}
                    </div>
                </div>
            </div>
        </Tilt>
    );
}

export default Card;