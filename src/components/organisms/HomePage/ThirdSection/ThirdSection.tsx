import React from 'react';
import { ThirdSectionWrapper } from './ThirdSection.styled';
import { Col, Row } from 'antd';
import { SmallHeader } from '../../../pages/homepage/HomPage.styled';
import ProjectCardList from '../../../molecules/ProjectCardList';
import Payments from '../../../molecules/Payments';
import { trends } from '../../../molecules/TrendingItems/mock';

const ThirdSection = () => {
  return (
    <ThirdSectionWrapper>
      <Row gutter={60}>
        <Col xs={24} md={12} style={{ marginBottom: 100 }}>
          <SmallHeader fontSize={16}>Projects using Juicebox</SmallHeader>
          <ProjectCardList projects={trends} />
        </Col>
        <Col xs={24} md={12} style={{ marginBottom: 100 }}>
          <SmallHeader fontSize={16}>Latest payments</SmallHeader>
          <Payments payments={trends} />
        </Col>
      </Row>
    </ThirdSectionWrapper>
  );
};

export default ThirdSection;
