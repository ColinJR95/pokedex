import React, { useState } from 'react';
import Card from '../Card/Card';
import {useHistory} from 'react-router-dom';


function CardList({ pokemon, id }) {
    const history = useHistory();
    const [url] = useState('https://pokeapi.co/api/v2/pokemon/')

    return (
        <div className="flex flex-wrap items-center justify-center">
            {
                pokemon.map((monster, i) => {
                    return (
                    <Card 
                        key={monster.name}
                        name={monster.forms[0].name}
                        type={monster.types.map( type => type.type.name)}
                        sprite={monster.sprites.front_default}
                        url={monster.url}
                        onClick = {() => history.push(`/${pokemon.id}`)}

                    />);
                })
            }
        </div>
    );
}

export default CardList;