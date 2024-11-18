import { Typography } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Avatar, Card, CardContent, Grid } from '@mui/material';
import React from 'react';

import './Hero.scss';

export const Hero: React.FC = () => {
  return (
    <>
      <Card style={{ paddingTop: '100px' }} id="hero">
        <CardContent
          sx={{ display: 'flex', justifyContent: 'center', gap: '100px' }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
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
            <a
                className="link-hero"
                href="https://t.me/vadym_js"
                rel="noreferrer"
                target="_blank"
              >
                <TelegramIcon />
              </a>
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
          </CardContent>
          <Avatar
            sx={{ width: '300px', height: '300px' }}
            alt="Vadym Sainiuk"
            src="/portfolio/images/Vadym.jpg"
          />
        </CardContent>

        <CardContent sx={{ marginTop: '50px' }}>
          <Grid className="slider" container spacing={5}>
            <Grid xs={3} item>
              <Typography style={{ fontWeight: 'bold' }} variant="h6">
                Tech Stack <span style={{ paddingLeft: '30px' }}>|</span>
              </Typography>
            </Grid>
            <Grid
              MenuProps={{ MenuListProps: { disablePadding: true } }}
              className="item-icon-slider item-icon-slider1"
              item
            >
              <div className="tech-icon html" />
            </Grid>
            <Grid
              padding={0}
              className="item-icon-slider item-icon-slider2"
              item
            >
              <div className="tech-icon css" />
            </Grid>
            <Grid
              padding={0}
              className="item-icon-slider item-icon-slider3"
              item
            >
              <div className="tech-icon js" />
            </Grid>
            <Grid
              padding={0}
              className="item-icon-slider item-icon-slider4"
              item
            >
              <div className="tech-icon react" />
            </Grid>
            <Grid
              padding={0}
              className="item-icon-slider item-icon-slider5"
              item
            >
              <div className="tech-icon node" />
            </Grid>
            <Grid
              padding={0}
              className="item-icon-slider item-icon-slider6"
              item
            >
              <div className="tech-icon mui" />
            </Grid>
            <Grid
              padding={0}
              className="item-icon-slider item-icon-slider7"
              item
            >
              <div className="tech-icon tailwind" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
