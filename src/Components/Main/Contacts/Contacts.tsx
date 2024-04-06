import React from 'react';
import { Typography } from '@material-ui/core';
import { Card } from '@mui/material';
import { contacts } from '../../../data/contacts.ts';
import { Contact } from './Contact/Contact.tsx';
import { useIntersectionObserver } from 'usehooks-ts'

export const Contacts: React.FC = () => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  })

  return (
    <div ref={ref} style={{ display: 'flex', width: '100%', padding: '150px 0 70px 0', flexDirection: 'column' }}>
    <Card className={`${isIntersecting ? 'scroll-right' : ''}`} id="contacts" >
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
    </div>
  );
};
