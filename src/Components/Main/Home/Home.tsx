import React from 'react';
import { Card, CardContent, Grid, Avatar } from '@mui/material';
import { Typography } from '@material-ui/core'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Home.scss';

export const Home: React.FC = () => {
  const sliders = document.querySelectorAll('.logos-slide');

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    addAnimation();
  }

  function addAnimation() {
    sliders.forEach((slider) => {
     slider.setAttribute('data-animated', 'true');
    });
  }
  return (
    <>
      <Card>
        <CardContent
          sx={{ display: 'flex', justifyContent: 'center', gap: '100px' }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography style={{ fontWeight: 'bold' }} variant="h3">
              Full-Stack Developer 👋
            </Typography>
            <Typography variant="h6">
              Hi, I'm Vadym Sainiuk. A passionate Full-Stack Developer based in
              Ivano-Frankivsk, Ukraine. 📍
            </Typography>
            <CardContent sx={{ display: 'flex', gap: '20px' }}>
              <a className='link-home' href="https://www.linkedin.com/in/vadym-sainiuk-552104301/" rel="noreferrer" target="_blank">
                <LinkedInIcon />
              </a>
              <a className='link-home' href="https://github.com/vSainiuk" rel="noreferrer" target="_blank">
                <GitHubIcon />
              </a>
            </CardContent>
          </CardContent>
          <Avatar
            sx={{ width: '300px', height: '300px' }}
            alt="Vadym Sainiuk"
            src="url-to-your-photo.jpg"
          />
        </CardContent>
        <CardContent sx={{ marginTop: '50px' }}>
          <Grid container spacing={5}>
            <Grid xs={3} item>
              <Typography style={{ fontWeight: 'bold' }} variant="h6">
                Tech Stack <span style={{ paddingLeft: '30px' }}>|</span>
              </Typography>
            </Grid>
            <Grid item>
              <div className="tech-icon html" />
            </Grid>
            <Grid item>
              <div className="tech-icon css" />
            </Grid>
            <Grid item>
              <div className="tech-icon js" />
            </Grid>
            <Grid item>
              <div className="tech-icon react" />
            </Grid>
            <Grid item>
              <div className="tech-icon node" />
            </Grid>
            <Grid item>
              <div className="tech-icon mui" />
            </Grid>
            <Grid item>
              <div className="tech-icon tailwind" />
            </Grid>
          </Grid>
        </CardContent>

        {/* <CardContent sx={{ display: 'flex', marginTop: '50px' }}>
          <Typography style={{ fontWeight: 'bold' }} variant="h6">
            Tech Stack <span style={{ paddingLeft: '30px' }}>|</span>
          </Typography>

          <div className="logos">
            <div className="logos-slide">
              <div className="tech-icon html" />
              <div className="tech-icon css" />
              <div className="tech-icon js" />
              <div className="tech-icon react" />
              <div className="tech-icon node" />
              <div className="tech-icon mui" />
              <div className="tech-icon tailwind" />
              <div className="tech-icon html" />
              <div className="tech-icon css" />
              <div className="tech-icon js" />
              <div className="tech-icon react" />
              <div className="tech-icon node" />
              <div className="tech-icon mui" />
              <div className="tech-icon tailwind" />
            </div>
          </div>
        </CardContent> */}
      </Card>
    </>
  );
};
