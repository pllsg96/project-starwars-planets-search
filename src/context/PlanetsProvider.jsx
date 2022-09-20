import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    try {
      setLoading(true);
      const PLANETS_API = 'https://swapi.dev/api/planets';
      const response = await fetch(PLANETS_API);
      const data = await response.json();
      const { results } = data;
      // Filter feito com ajuda de Ivens Arroxelas
      const arrayWithoutResidents = results.filter((result) => delete result.residents);
      setPlanets(arrayWithoutResidents);
      console.log(arrayWithoutResidents);
      setLoading(false);
    } catch {
      console.log('erro');
    }
  };

  const contextValue = {
    planets,
    loading,
    getPlanets,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
