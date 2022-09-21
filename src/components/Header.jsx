import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import './Header.css';

function Header() {
  const { planetInput, setPlanetInput } = useContext(PlanetsContext);

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
            onChange={ (event) => {
              setPlanetInput(event.currentTarget.value);
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
            id=""
            data-testid="comparison-filter"
          >
            <option value=">">Maior que</option>
            <option value="<">Menor que</option>
            <option value="===">igual a</option>
          </select>
        </label>

        <label htmlFor="input-number">
          <input
            type="number"
            name="input-number"
            data-testid="value-filter"
          />
        </label>

        <button
          type="button"
          name="filterButton"
          data-testid="button-filter"
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
        >
          Remover Filtros
        </button>

      </form>
    </div>
  );
}

export default Header;
