import React from 'react';
import ProjectCard from '../../atoms/ProjectCard';
import { ButtonWrapper, ProjectCardListWrapper } from './ProjectCardList.styled';
import { NavLink } from 'react-router-dom';
import Button from '../../atoms/Button';
import { TrendProps } from '../../atoms/TrendingItem/types';
import { v4 as uuid } from 'uuid';

const ProjectCardList = ({ projects }: { projects: TrendProps[] }) => {
  const changePageHandler = () => {
    localStorage.setItem('tab', '2');
  };

  return (
    <>
      <ProjectCardListWrapper>
        {projects.map(project => (
          <NavLink to={`/project/${project.name?.toLocaleLowerCase()}`} key={uuid()}>
            <ProjectCard project={project} key={uuid()} />
          </NavLink>
        ))}
      </ProjectCardListWrapper>
      <ButtonWrapper>
        <NavLink to={'/projects'} onClick={changePageHandler}>
          <Button outlined={true}>All projects</Button>
        </NavLink>
      </ButtonWrapper>
    </>
  );
};

export default ProjectCardList;
