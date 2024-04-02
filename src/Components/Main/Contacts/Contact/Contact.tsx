import React from 'react';
import { CardContent } from '@mui/material';
import { Typography } from '@material-ui/core';
import { ContactItem } from '../../../../types/ContactItem';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TelegramIcon from '@mui/icons-material/Telegram';

import './Contact.scss';

interface ContactProps {
  contact: ContactItem;
}

export const Contact: React.FC<ContactProps> = ({ contact }) => {
  let iconComponent;

  switch (contact.title) {
    case 'Location':
      iconComponent = <LocationOnIcon />;
      break;
    case 'Email':
      iconComponent = <AlternateEmailIcon />;
      break;
    case 'Telegram':
      iconComponent = <TelegramIcon />;
      break;
    default:
      iconComponent = null;
  }

  return (
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      style={{ padding: 0 }}
    >
      <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
        {iconComponent}
        <Typography
          variant="h6"
          style={{ fontWeight: 'bold' }}
          className="title-contact"
        >
          {contact.title}
        </Typography>
      </div>
      <a
        href={contact.link}
        rel="noreferrer"
        target="_blank"
        className="contact-link"
      >
        <Typography className="description-contact" variant="body1">
          {contact.title === 'Location'
            ? 'Ivano-Frankivsk, Ukraine'
            : contact.title === 'Email'
            ? `${contact.link.slice(7)}`
            : `${contact.link.slice(13)}`}
        </Typography>
      </a>
    </CardContent>
  );
};
