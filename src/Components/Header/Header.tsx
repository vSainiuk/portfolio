import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import './Header.scss';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      justifyContent: 'space-between',
      paddingInline: '100px',
      backgroundColor: 'white',
      color: 'black',
    },
  })
);

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography style={{fontWeight: 'bold'}} variant="h5">Portfolio</Typography>

        <div
          style={{
            gap: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography className="nav-link" variant="h6">
            Home
          </Typography>
          <Typography className="nav-link" variant="h6">
            About
          </Typography>
          <Typography className="nav-link" variant="h6">
            Projects
          </Typography>
          <Typography className="nav-link" variant="h6">
            Contact
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};
