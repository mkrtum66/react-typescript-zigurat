import React, { useContext } from 'react';
import { Heading, HideTablet, TrandingSection } from './Trending.styled';
import { Section } from '../../../../styles/global';
import { Col, Row, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons/lib';
import ThemeContext from '../../../../context/ThemeContext';
import TrendingItems from '../../../molecules/TrendingItems';
import useMobile from '../../../../hooks/Mobile';
const engineer = require('../../../../assets/engineer.png');

const Trending = () => {
  const theme = useContext(ThemeContext);
  const isMobile = useMobile();
  const RankingExplanation = ({ trendingWindow }: { trendingWindow: number }) => {
    return (
      <p style={{ padding: '5px', color: theme === 'dark' ? '#e1e0e8' : '#000000ee' }}>
        Rankings based on number of contributions and volume gained in the last {trendingWindow}{' '}
        days.
      </p>
    );
  };

  return (
    <TrandingSection>
      <Section maxWidth={1200}>
        <Row>
          <Col
            xs={0}
            lg={8}
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            {!isMobile ? (
              <HideTablet>
                <img style={{ height: 550 }} src={engineer} alt="Engineer" />
              </HideTablet>
            ) : (
              ''
            )}
          </Col>
          <Col xs={24} lg={15}>
            <div style={{ paddingBottom: 20 }}>
              <Heading>
                <span style={{ marginRight: '12px' }}>Trending projects</span>
                <Tooltip
                  title={<RankingExplanation trendingWindow={7} />}
                  placement="bottom"
                  color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
                >
                  <InfoCircleOutlined style={{ fontSize: 20 }} />
                </Tooltip>
              </Heading>
            </div>
            <TrendingItems />
          </Col>
        </Row>
      </Section>
    </TrandingSection>
  );
};

export default Trending;
