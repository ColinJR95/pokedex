import React, {Fragment} from 'react';
import Card from '../Card/Card';

function CardList({ pokemons }) {
    return (
        <div className="flex flex-wrap items-center justify-center">
            {
                pokemons.map((monster, i) => {
                    return (
                    <Card 
                        key={i}
                        name={monster.forms[0].name}
                        type={monster.types.map( type => type.type.name)}
                        sprite={monster.sprites.front_default}
                    />);
                })
            }
        </div>
    );
}

export default CardList;