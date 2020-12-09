import React, { Fragment } from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <Fragment>
            <div className='center pa2'>
                <input
                    className='pa3 ba tc b--green bg-lightest-blue' 
                    type="search" 
                    placeholder="Search Pokémons"
                    onChange={searchChange} 
                />
            </div>
        </Fragment>

    );
}

export default SearchBox;