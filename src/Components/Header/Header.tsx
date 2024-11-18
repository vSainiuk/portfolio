import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import './Header.scss';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      justifyContent: 'space-between',
      paddingInline: '100px',
      backgroundColor: 'white',
      color: 'black',
    }
  })
);

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.root}>
        <Typography style={{ fontWeight: 'bold' }} variant="h5">
          Portfolio
        </Typography>

        <div
          style={{
            gap: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link href="#hero" color="inherit" style={{textDecoration: 'none'}}>
            <Typography className="nav-link" variant="h6">
              Me
            </Typography>
          </Link>
          <Link href="#about" color="inherit" style={{textDecoration: 'none'}}>
            <Typography className="nav-link" variant="h6">
              About
            </Typography>
          </Link>
          <Link href="#projects" color="inherit" style={{textDecoration: 'none'}}>
            <Typography className="nav-link" variant="h6">
              Projects
            </Typography>
          </Link>
          <Link href="#contacts" color="inherit" style={{textDecoration: 'none'}}>
            <Typography className="nav-link" variant="h6">
              Contact
            </Typography>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
