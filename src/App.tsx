import React from 'react';
import { Header } from './Components/Header/Header.tsx';
import { Main } from './Components/Main/Main.tsx';
import './App.scss';
import { Footer } from './Components/Footer/Footer.tsx';

const App = () => {
  return (
    <main className="App">
      <Header />
      <Main />
      <Footer />
    </main>
  );
};

export default App;
