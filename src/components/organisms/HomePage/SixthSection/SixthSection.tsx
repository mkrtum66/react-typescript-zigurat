import React from 'react';
import { Grid, SixthSectionWrapper } from './SixthSection.styled';
import { Section } from '../../../../styles/global';
import { Col, Row } from 'antd';
const pagoda = require('../../../../assets/pagoda.png');

const SixthSection = () => {
  return (
    <SixthSectionWrapper>
      <Section maxWidth={1080}>
        <Row align="middle" gutter={40}>
          <Col xs={24} md={14}>
            <Grid>
              <h1>Why Zigurat?</h1>
              <div>
                <p>
                Finding likeminded supporters is hard. And builders typically need to focus all their time on builidng their citadel, no matter how big or small.
                </p>
                <p>
                  By using Zigurat, you have a template to provide supporters with key information
                  about your project - meaning your time is freed up to focus on what matter to you
                  - be it planting crops, raising a herd, or laying foundations for a whole new city.
                </p>
                <p>
                Supporters will get the perks you determine to ensure all stakeholders are fully aligned
                to ensure a succesful project.
                </p>
              </div>
            </Grid>
          </Col>

          <Col xs={24} md={10}>
            <img
              style={{ maxWidth: '100%' }}
              src={pagoda}
              alt="Pagoda"
            />
          </Col>
        </Row>
      </Section>
    </SixthSectionWrapper>
  );
};

export default SixthSection;
