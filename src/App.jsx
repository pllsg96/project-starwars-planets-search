import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  return (
    <PlanetsProvider>
      <main>
        <Header />
        <Table />
      </main>
    </PlanetsProvider>
  );
}

export default App;
