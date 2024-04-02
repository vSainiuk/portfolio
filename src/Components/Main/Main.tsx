import React from 'react';
import { Home } from './Home/Home.tsx';
import { About } from './About/About.tsx';

export const Main: React.FC = () => {
  return (
    <div className='container'>
      <Home />
      <About />
    </div> 
  );
};
