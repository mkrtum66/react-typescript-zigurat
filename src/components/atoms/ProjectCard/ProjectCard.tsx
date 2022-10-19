import { Card, DescriptionWrapper, ImageWrapper, TooltipWrapper } from './ProjectCard.styled';
import React, { useContext } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import { TrendProps } from '../TrendingItem/types';
import { StyledTooltip, ToolIcon } from '../../pages/currentTrendingProject/CurrentTranding.styled';
import { Row } from 'antd';

const ProjectCard = ({ project }: { project: TrendProps }) => {
  const theme = useContext(ThemeContext);

  return (
    <Card>
      <ImageWrapper>
        <img
          src={theme === 'light' ? project.logoUri.forLight : project.logoUri.forDark}
          alt={theme === 'light' ? project.logoUri.forLight : project.logoUri.forDark}
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <p className="title">{project.name}</p>
        <Row align={'middle'}>
          <span>{project.handle}</span>
          <TooltipWrapper style={{ marginLeft: '10px' }}>
            <StyledTooltip
              title={'Coming Soon'}
              color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
              getPopupContainer={trigger => trigger.parentElement as HTMLElement}
            >
              <ToolIcon />
            </StyledTooltip>
          </TooltipWrapper>
        </Row>
        <div className="overflowed">{project.description}</div>
      </DescriptionWrapper>
    </Card>
  );
};

export default ProjectCard;
