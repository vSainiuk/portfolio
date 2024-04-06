import React from 'react';
import { Card, CardContent } from '@mui/material';
import { Typography } from '@material-ui/core'
import { useInView } from 'react-intersection-observer';

import './About.scss';

export const About: React.FC = () => {
  const { ref, inView } = useInView(
    { 
      threshold: 0.5,
      triggerOnce: true
    }
  );

  return (
    <Card ref={ref} className={`${inView ? 'scroll-right' : ''}`} id='about' sx={{ display: 'flex', paddingTop: '170px', height: '370px' }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
        <div className="about-image" />
      </CardContent>
      <CardContent sx={{ textAlign: 'left'}}>
        <Typography style={{fontWeight: 'bold'}} className='title' variant="h5">
          About Me
        </Typography>
        <Typography
          style={{ marginTop: '20px', fontWeight: 'bold' }}
          variant="h5"
        >
          I am a Full-Stack Developer with a passion for creating web
          applications.
        </Typography>
        <Typography style={{ marginTop: '20px' }} variant="body1">
          As a full-stack developer, I'm focused on building innovative products
          using React that not only solve problems, but also bring significant
          value to users and society. My commitment to continuous
          self-improvement and learning allows me to stay one step ahead in the
          fast-paced world of technology. I like to take on new projects that
          challenge me and stimulate the development of my skills. I believe
          that learning never ends and I am always on the lookout for new
          opportunities to grow.
        </Typography>
      </CardContent>
    </Card>
  );
};
