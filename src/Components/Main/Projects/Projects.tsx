import React from 'react';
import { Card } from '@mui/material';
import { Typography } from '@material-ui/core';
import { Project } from './Project.tsx/Project.tsx';
import { projects } from '../../../data/projects.ts';

export const Projects: React.FC = () => {
  return (
    <Card
      id="projects"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '150px',
      }}
    >
      <Typography
        style={{ fontWeight: 'bold', textAlign: 'left', padding: '16px 0 0 16px'}}
        className="title"
        variant="h5"
      >
        Portfolio
      </Typography>
      <Typography
        style={{
          fontWeight: 'bold',
          textAlign: 'left',
          padding: '5px 0 50px 16px',
        }}
        variant="h5"
      >
        All projects were implemented on our own
      </Typography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
        {projects.map((project, index) => (
          <Project key={index} project={project} reversed={index % 2 === 1} />
        ))}
      </div>
    </Card>
  );
};
