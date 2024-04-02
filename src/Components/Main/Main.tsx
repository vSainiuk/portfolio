import React from 'react';
import { Home } from './Home/Home.tsx';
import { About } from './About/About.tsx';
import { Projects } from './Projects/Projects.tsx';
import { Contacts } from './Contacts/Contacts.tsx';

export const Main: React.FC = () => {
  return (
    <div className='container'>
      <Home />
      <About />
      <Projects />
      <Contacts />
    </div> 
  );
};
