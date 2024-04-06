import React from 'react';
import { Typography } from '@material-ui/core';
import { Card } from '@mui/material';
import { contacts } from '../../../data/contacts.ts';
import { Contact } from './Contact/Contact.tsx';
import { useInView } from 'react-intersection-observer';

export const Contacts: React.FC = () => {
  const { ref, inView } = useInView(
    {
      threshold: 0.5,
      triggerOnce: true,
    }
  );

  return (
    <Card ref={ref} className={`${inView ? 'scroll-right' : ''}`} id="contacts" sx={{ display: 'flex', width: '100%', padding: '150px 0 70px 0', flexDirection: 'column' }}>
      <Typography
        style={{
          fontWeight: 'bold',
          textAlign: 'left',
          padding: '16px 0 0 16px',
        }}
        className="title"
        variant="h5"
      >
        Contacts
      </Typography>
      <Typography
        style={{
          fontWeight: 'bold',
          textAlign: 'left',
          padding: '5px 16px 50px 16px',
        }}
        variant="h5"
      >
        Contact me if you want interesting ideas for your projects
      </Typography>

      <div
        style={{ display: 'flex', gap: '20px', justifyContent: 'space-around', padding: '0 16px 50px 16px' }}
      >
        {contacts.map((contact, index) => (
          <Contact key={index} contact={contact} />
        ))}
      </div>
    </Card>
  );
};
