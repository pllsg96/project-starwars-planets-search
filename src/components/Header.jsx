import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1>Projeto Star Wars</h1>
      <form action="">
        <label htmlFor="input-column">
          <input
            type="text"
            name="input-column"
            data-testid="name-filter"
          />
        </label>

        <label htmlFor="input-operator">
          <input
            type="text"
            name="input-operator"
          />
        </label>

        <label htmlFor="input-number">
          <input
            type="text"
            name="input-number"
          />
        </label>

        <button
          type="button"
          name="filterButton"
        >
          filterButton
        </button>

        <label htmlFor="orderBy-input">
          <input
            type="text"
            name="orderBy-input"
          />
        </label>

        <label htmlFor="Ascendente">
          <input
            type="radio"
            value="Ascendente"
          />
          Ascendente
        </label>

        <label htmlFor="Descendente">
          <input
            type="radio"
            value="Descendente"
          />
          Descendente
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
