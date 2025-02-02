import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActors = () => {
    return actors.map(actor =>{
      return (
        <div>
          {actor.name}
          {renderMovies(actor.movies)}
        </div>
      )
    })
  }

  const renderMovies = (movies) => {
    return movies.map(movie => <ul>{movie}</ul>)
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
