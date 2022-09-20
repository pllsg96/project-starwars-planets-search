import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';

function App() {
  return (
    <PlanetsProvider>
      <main>
        <span>Hello, App!</span>
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;
