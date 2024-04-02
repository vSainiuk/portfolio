import React from 'react';
import { ProjectItem } from '../../../../types/ProjectItem';
import { CardContent } from '@mui/material';
import { Typography } from '@material-ui/core'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import './Project.scss';

interface ProjectProps {
  project: ProjectItem;
  reversed: boolean;
}

export const Project: React.FC<ProjectProps> = ({ project, reversed }) => {
  return (
    <CardContent sx={{ display: 'flex', gap: '40px', paddingTop: '0', flexDirection: reversed ? 'row-reverse' : 'row' }}>
      <div className="wrapper-video">
        <video width="600px" autoPlay loop muted>
          <source src={project.video} type="video/mp4" />
        </video>
      </div>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        style={{ padding: 0 }}
      >
        <Typography
          variant="h5"
          style={{ fontWeight: 'bold' }}
          className="title-project"
        >
          {project.title}
        </Typography>
        <Typography className="description-project" variant="body1">
          {project.description}
        </Typography>
        <Typography style={{ fontWeight: 'bold' }} variant="h5">
          {project.technology.join(', ')}
        </Typography>

        <CardContent
          sx={{ display: 'flex', gap: '20px', justifyContent: 'center' }}
          style={{ padding: '0' }}
        >
          <a className='link' href={project.links[0].url} rel="noreferrer" target="_blank">
            <Typography variant="h6">{project.links[0].title}</Typography>
            <GitHubIcon />
          </a>
          <a className='link' href={project.links[1].url} rel="noreferrer" target="_blank">
            <Typography variant="h6">{project.links[1].title}</Typography>
            <OpenInNewIcon />
          </a>
        </CardContent>
      </CardContent>
    </CardContent>
  );
};
