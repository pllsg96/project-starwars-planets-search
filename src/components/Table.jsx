import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Loading from './Loading';
import './Table.css';

function Table() {
  const {
    getPlanets,
    planets,
    loading,
    selectedFilters,
    planetInput,
  } = useContext(PlanetsContext);

  useEffect(() => {
    getPlanets();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            (planets
              .filter((planet) => (planet.name.toLowerCase())
                .includes(planetInput.toLowerCase())))
              .filter((planet) => {
                const bools = [];
                selectedFilters.forEach((filter) => {
                  switch (filter.comparison) {
                  case 'maior que':
                    bools.push(
                      (Number(planet[filter.column]) > Number(filter.value)),
                    );
                    break;
                  case 'menor que':
                    bools.push(
                      (Number(planet[filter.column]) < Number(filter.value)),
                    );
                    break;
                  case 'igual a':
                    bools.push(
                      (Number(planet[filter.column]) === Number(filter.value)),
                    );
                    break;

                  default:
                    return true;
                  }
                });
                return bools.every((el) => el);
              })
              .map((planet, index) => (
                <tr key={ index }>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>

                </tr>

              ))
          }
        </tbody>

      </table>
    </div>
  );
}

export default Table;
