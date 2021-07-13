import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function renderSort(colHeaders, handleChange) {
  return (
    <>
      <select
        data-testid="column-sort"
        name="name"
      >
        {
          colHeaders.map((option, key) => (
            <option key={ key } onChange={ handleChange }>{option}</option>))
        }
      </select>
      <input
        type="radio"
        data-testid="column-sort-input-asc"
        value="ASC"
        name="sort"
        checked
        onChange={ handleChange }
      />
      ASCENDENTE
      <input
        type="radio"
        data-testid="column-sort-input-asc"
        value="DESC"
        name="sort"
        onChange={ handleChange }
      />
      DESCENDENTE
      <button
        type="button"
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </>
  );
}

function SortFilter() {
  return (
    <StarWarsContext.Consumer>
      { ({ colHeaders, handleChange }) => renderSort(colHeaders, handleChange)}
    </StarWarsContext.Consumer>
  );
}

export default SortFilter;
