import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import './Header.css';

function Header() {
  const {
    selectedFilters,
    setSelectedFilters,
    allFilters,
    setAllFilters,
    planetInput,
    setPlanetInput,
  } = useContext(PlanetsContext);

  const handleAllFilters = () => {
    setSelectedFilters((prevState) => [...prevState, allFilters]);
  };

  return (
    <div className="header">
      <h1>Projeto Star Wars</h1>
      <form action="">
        <label htmlFor="input-planet">
          Nome do planeta:
          {' '}
          <input
            type="text"
            name="input-planet"
            data-testid="name-filter"
            value={ planetInput }
            onChange={ ({ target }) => {
              setPlanetInput(() => target.value);
            } }
          />
        </label>
        <br />

        <label htmlFor="input-column">
          Coluna:
          {' '}
          <select
            name="input-column"
            id="input-column"
            data-testid="column-filter"
            value={ allFilters.column }
            onChange={ ({ target }) => {
              setAllFilters((prevState) => ({ ...prevState, column: target.value }));
            } }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>

        <label htmlFor="input-operator">
          Operador:
          {' '}
          <select
            name="input-operator"
            id="comparison-filter"
            data-testid="comparison-filter"
            value={ allFilters.comparison }
            onChange={ ({ target }) => {
              setAllFilters((prevState) => ({ ...prevState, comparison: target.value }));
            } }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>

        <label htmlFor="input-number">
          <input
            type="number"
            name="input-number"
            data-testid="value-filter"
            value={ allFilters.value }
            onChange={ ({ target }) => {
              setAllFilters((prevState) => ({ ...prevState, value: target.value }));
            } }
          />
        </label>

        <button
          type="button"
          name="filterButton"
          data-testid="button-filter"
          onClick={ handleAllFilters }
        >
          Adiciona filtros
        </button>

        <label htmlFor="orderBy-input">
          <select name="orderBy-input" id="">
            <option value="Population">Population</option>
          </select>
        </label>

        <label htmlFor="Ascendente">
          <input
            type="radio"
            value="Ascendente"
          />
          Ascendente
        </label>

        <button
          type="button"
          name="orderButton"
        >
          Ordenar
        </button>

        <button
          type="button"
          name="removeFilterButton"
          onClick={ () => (setSelectedFilters(() => [])) }
        >
          Remover Filtros
        </button>

        {selectedFilters.map((filter, index) => (
          <div key={ index }>
            <span>
              {filter.column}
              {filter.value}
            </span>
          </div>
        ))}

      </form>
    </div>
  );
}

export default Header;
