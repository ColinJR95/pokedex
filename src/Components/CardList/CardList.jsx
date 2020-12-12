import React, { useState } from 'react';
import Card from '../Card/Card';
import {useHistory} from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Pokemon from '../Pokemon/Pokemon'
import { makeStyles } from '@material-ui/core/styles';
import './CardList.scss'



//adding modal here
function CardList({ pokemon, id }) {

    const [currentId, setCurrentId] = useState(null);

    const [open, setOpen] = useState(false);

    const handleOpen = (id) => {
        setCurrentId(id);
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };

    
    
    const setId = (id) => {
        setCurrentId(id)
    }
    console.log(currentId)

    const body = (
    <div className='modal'>

      <Pokemon pokemonId={currentId} handleClose={handleClose} />
    </div>
  );

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
                        setId={handleOpen} 
                        id={monster.id}

                    />);
                })
            }
                    <Modal className = 'modal'
                    style={{display:'flex',alignItems:'center',justifyContent:'center'}}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                        > 
                    {body}
                        </Modal>
        </div>
    );
}

export default CardList;