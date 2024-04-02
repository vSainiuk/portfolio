import React from 'react';
import { Header } from './Components/Header/Header.tsx';
import { Main } from './Components/Main/Main.tsx';
import './App.scss';

const App = () => {
  return (
    <main className="App">
      <Header />
      <Main />
    </main>
  );
};

export default App;
