import React from 'react';
import { Hero } from './Hero/Hero.tsx';
import { About } from './About/About.tsx';
import { Projects } from './Projects/Projects.tsx';
import { Contacts } from './Contacts/Contacts.tsx';

export const Main: React.FC = () => {
  return (
    <div className='container'>
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </div> 
  );
};
