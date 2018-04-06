import React from 'react';

const PokeView = ({ pokemon }) => {

  if (pokemon !== undefined) {
    return (
      <div className='wrapper'>
        <h1 className='name'>{pokemon.name}</h1>
        <img src={pokemon.sprite} alt='pokemon'/>
        <p className='type'>Type: {pokemon.type}</p>
      </div>
    )
  } else {
    return null;
  }
}

export default PokeView;
