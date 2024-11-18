import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { CardContent } from '@mui/material';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      justifyContent: 'space-between',
      paddingInline: '300px',
      backgroundColor: 'black',
      color: 'white',
    },
  })
);

export const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography style={{ fontWeight: 'bold' }} variant="h6">
          {' '}
          Copyright &copy; {new Date().getFullYear()} All rights reserved
        </Typography>
        <CardContent sx={{ display: 'flex', gap: '20px' }}>
          <a
            className="link-hero"
            href="https://www.linkedin.com/in/vadym-sainiuk-552104301/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            className="link-hero"
            href="https://github.com/vSainiuk"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </a>
        </CardContent>
      </Toolbar>
    </AppBar>
  );
};
