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

  const columnOptions = [
    'orbital_period',
    'population',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

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

            {columnOptions.filter((option) => (
              !selectedFilters.find((filter) => option === filter.column)
            )).map((op) => (
              <option
                key={ op }
                value={ op }
              >
                {op}
              </option>
            ))}
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
          data-testid="button-remove-filters"
          onClick={ () => (setSelectedFilters(() => [])) }
        >
          Remover Filtros
        </button>

        {selectedFilters.map((filter, index) => (
          <div
            key={ index }
            className="divAppliedFilter"
            data-testid="filter"
          >
            <span>
              {filter.column}
              {' '}
              {filter.comparison}
              {' '}
              {filter.value}
            </span>
            <button
              type="button"
              onClick={ () => {
                const qlqrNome = [...selectedFilters];
                qlqrNome.splice(index, 1);
                setSelectedFilters(qlqrNome);
              } }
            >
              x
            </button>
          </div>
        ))}

      </form>
    </div>
  );
}

export default Header;
