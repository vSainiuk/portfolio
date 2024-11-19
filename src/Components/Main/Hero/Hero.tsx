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
            <Grid style={{ padding: 0 }} xs={3} item>
              <Typography style={{ fontWeight: 'bold' }} variant="h6">
                Tech Stack <span style={{ paddingLeft: '30px' }}>|</span>
              </Typography>
            </Grid>
            <div className="slider-list">
              <Grid
                style={{ '--position': 1 } as React.CSSProperties}
                padding={0}
                className="item-icon-slider tech-icon next"
                item
              />
              <Grid
                style={{ '--position': 2 } as React.CSSProperties}
                padding={0}
                className="item-icon-slider tech-icon nest"
                item
              />
              <Grid
                style={{ '--position': 3 } as React.CSSProperties}
                padding={0}
                className="item-icon-slider tech-icon html"
                item
              />
              <Grid
                style={{ '--position': 4 } as React.CSSProperties}
                padding={0}
                className="item-icon-slider tech-icon css"
                item
              />
              <Grid
                style={{ '--position': 5 } as React.CSSProperties}
                padding={0}
                className="item-icon-slider tech-icon js"
                item
              />
              <Grid
                style={{ '--position': 6 } as React.CSSProperties}
                padding={0}
                className="item-icon-slider tech-icon react"
                item
              />
              <Grid
                style={{ '--position': 7 } as React.CSSProperties}
                padding={0}
                className="item-icon-slider tech-icon node"
                item
              />
              <Grid
                style={{ '--position': 8 } as React.CSSProperties}
                padding={0}
                className="item-icon-slider tech-icon mui"
                item
              />
              <Grid
                style={{ '--position': 9 } as React.CSSProperties}
                padding={0}
                className="item-icon-slider tech-icon tailwind"
                item
              />
              <Grid
                style={{ '--position': 10 } as React.CSSProperties}
                padding={0}
                className="item-icon-slider tech-icon ts"
                item
              />
              <Grid
                style={{ '--position': 11 } as React.CSSProperties}
                padding={0}
                className="item-icon-slider tech-icon prisma"
                item
              />
              <Grid
                style={{ '--position': 12 } as React.CSSProperties}
                padding={0}
                className="item-icon-slider tech-icon redux"
                item
              />
            </div>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
