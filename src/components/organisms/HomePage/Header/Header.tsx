import React, { useContext } from 'react';
import { Col, Row, Space } from 'antd';
import { v4 as uuid } from 'uuid';
import { BigHeader, SmallHeader } from '../../../pages/homepage/HomPage.styled';
import ThemeContext from '../../../../context/ThemeContext';
import { BananaImage, HideMobile } from './Header.styled';
import Button from '../../../atoms/Button';
import { enabling } from './mock';
import HelpChat from '../../../atoms/HelpChat';
const bananaOd = require('../../../../assets/illus.png');
const bananaOl = require('../../../../assets/illus.png');
const bolt = require('../../../../assets/bolt.png');

const Header = () => {
  const theme = useContext(ThemeContext);

  const scrollDown = () => {
    document.getElementById('create')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Row gutter={30} align="middle" style={{ marginTop: '30px' }}>
      <Col
        xs={24}
        md={13}
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingBottom: 60,
        }}
      >
        <div
          style={{
            display: 'grid',
            rowGap: 30,
          }}
        >
          <BigHeader>Helping bitcoiners survive the transition to the citadel future</BigHeader>
          <div
            style={{
              fontWeight: 500,
              fontSize: '1rem',
            }}
          >
            <span>
              Whether you are creating a homestead, citadel, meshtadel, or Franchise Operated Quasi
              National Entity - build a community around a project, fund it, and program its
              spending.
            </span>
            <br />
            <br />
            <span>
              Powered by Bitcoin and <a href="https://elementsproject.org/">Elements</a>.
            </span>
          </div>
          <div
            style={{
              display: 'grid',
              gridAutoFlow: 'row',
              rowGap: 8,
              fontWeight: 600,
            }}
          >
            <SmallHeader fontSize={14} className="mb-0">
              Enabling:
            </SmallHeader>
            {enabling.map(data => {
              return (
                <Space style={{ fontStyle: 'italic', paddingLeft: 8 }} key={uuid()} size="middle">
                  <img src={bolt} style={{ height: 24 }} alt="⚡️" />
                  {data.item}
                </Space>
              );
            })}
            <HelpChat />
          </div>
          <HideMobile>
            <Button size="large" onClick={scrollDown}>
              Create your citadel
            </Button>
          </HideMobile>
        </div>
      </Col>
      <Col xs={24} md={11}>
        <BananaImage
          src={theme === 'light' ? bananaOl : bananaOd}
          alt="Chill banana drinking juice"
        />
      </Col>
    </Row>
  );
};

export default Header;
