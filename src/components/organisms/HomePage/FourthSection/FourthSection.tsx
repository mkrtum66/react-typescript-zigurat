import React from 'react';
import { v4 as uuid } from 'uuid';
import { Col, Row } from 'antd';
import { data } from './mock';
import { FourthCol, Grid, PinaImage } from './FourthSection.styled';
const pina = require('../../../../assets/castle.png');
const FourthSection = () => {
  return (
    <Row gutter={0} align="middle" style={{ marginTop: '40px' }}>
      <Col
        xs={24}
        md={11}
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingBottom: 60,
          paddingRight: 60,
        }}
      >
        <PinaImage src={pina} alt={'Pinepple geek artist holding a paintbrush'} />
      </Col>
      <Col xs={24} md={13}>
        <Grid>
          {data.items.map(item => {
            return (
              <FourthCol key={uuid()}>
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
              </FourthCol>
            );
          })}
        </Grid>
      </Col>
    </Row>
  );
};

export default FourthSection;
