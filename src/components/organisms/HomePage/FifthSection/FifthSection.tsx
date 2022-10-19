import React from 'react';
import { FifthSectionWrapper } from './FifthSection.styled';
import { Col, Row } from 'antd';
import DrawerItems from '../../../molecules/DrawerItems';

const FifthSection = () => {
  return (
    <FifthSectionWrapper>
      <Row style={{ marginTop: 40 }}>
        <Col
          xs={24}
          md={10}
          style={{
            marginBottom: '80px',
            paddingLeft: '40px',
            paddingRight: '40px',
          }}
        >
          <h1>Design your project 🎨</h1>
          <DrawerItems />
        </Col>
        <Col xs={24} md={14}>
          <h3>Preview:</h3>
        </Col>
      </Row>
    </FifthSectionWrapper>
  );
};

export default FifthSection;
