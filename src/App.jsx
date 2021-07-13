// https://www.youtube.com/watch?v=nV7Mf77GiOc video de referência para renderizar a tabela.

import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import Table from './components/Table';
import FilterByText from './components/FilterByText';
import NumericFilter from './components/NumericFilters';
import ClearFilters from './components/ClearFilters';
import SortFilter from './components/SortFilter';

function App() {
  return (
    <StarWarsProvider>
      <FilterByText />
      <NumericFilter />
      <ClearFilters />
      <SortFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
