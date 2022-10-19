import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons/lib';
import { Accordion, BottomInfo, StyledDescriptions } from './ProjectAccordion.styled';
import { Collapse, Descriptions } from 'antd';
import WarningTooltip from '../../atoms/WarningTooltip';
import { ProjectDetailProps } from '../../../utils/models/project/projectState';
const { Panel } = Collapse;

const ProjectAccordion = ({ detail }: { detail: ProjectDetailProps }) => {
  const duration = Number(detail.endBlock) - Number(detail.startBlock);
  return (
    <div>
      <Accordion>
        <Panel header={<span>Detail</span>} key="1">
          <StyledDescriptions size="small" column={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 2 }}>
            <Descriptions.Item label={`Target`}>
              <WarningTooltip text={`${detail.target}`} tooltipTitle={'Title'} />
            </Descriptions.Item>
            <Descriptions.Item label={`Duration`}>
              <WarningTooltip
                showWarning={true}
                text={duration ? duration.toString() : 'Not set'}
                tooltipTitle={
                  'The project owner may reconfigure this funding cycle at any time, without notice.'
                }
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  Discount rate
                  <QuestionCircleOutlined />
                </>
              }
            >
              <WarningTooltip
                showWarning={true}
                text={'0%'}
                withOutIcon={true}
                tooltipTitle={
                  'The ratio of tokens rewarded per payment amount will decrease by this percentage with each new funding cycle. A higher discount rate will incentivize supporters to pay your project earlier than later.'
                }
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  Bonding curve rate
                  <QuestionCircleOutlined />
                </>
              }
            >
              <WarningTooltip
                showWarning={true}
                text={'100%'}
                withOutIcon={true}
                tooltipTitle={
                  'This rate determines the amount of overflow that each token can be redeemed for at any given time. On a lower bonding curve, redeeming a token increases the value of each remaining token, creating an incentive to hodl tokens longer than others. A bonding curve of 100% means all tokens will have equal value regardless of when they are redeemed.'
                }
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  Reserved tokens
                  <QuestionCircleOutlined />
                </>
              }
            >
              <WarningTooltip
                showWarning={true}
                text={'0%'}
                withOutIcon={true}
                tooltipTitle={
                  'Whenever someone pays your project, this percentage of tokens will be reserved and the rest will go to the payer. Reserve tokens are reserved for the project owner by default, but can also be allocated to other wallet addresses by the owner. Once tokens are reserved, anyone can "mint" them, which distributes them to their intended receivers.'
                }
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  Issue rate
                  <QuestionCircleOutlined />
                </>
              }
            >
              <WarningTooltip
                showWarning={true}
                text={`${detail.rate} ${detail.rateType}`}
                withOutIcon={true}
                tooltipTitle={
                  'Whenever someone pays your project, this percentage of tokens will be reserved and the rest will go to the payer. Reserve tokens are reserved for the project owner by default, but can also be allocated to other wallet addresses by the owner. Once tokens are reserved, anyone can "mint" them, which distributes them to their intended receivers.'
                }
              />
            </Descriptions.Item>
          </StyledDescriptions>
          <StyledDescriptions size="small" column={1}>
            <Descriptions.Item
              label={
                <>
                  Token minting
                  <QuestionCircleOutlined />
                </>
              }
            >
              <WarningTooltip
                showWarning={true}
                text={detail.reIssuable ? 'Allowed' : 'Not Allowed'}
                withOutIcon={false}
                tooltipTitle={
                  'Whenever someone pays your project, this percentage of tokens will be reserved and the rest will go to the payer. Reserve tokens are reserved for the project owner by default, but can also be allocated to other wallet addresses by the owner. Once tokens are reserved, anyone can "mint" them, which distributes them to their intended receivers.'
                }
              />
            </Descriptions.Item>
            <Descriptions.Item label={'Payments'}>
              <WarningTooltip
                showWarning={false}
                text={detail.dividsible ? 'Enabled' : 'Disabled'}
                withOutIcon={false}
                tooltipTitle={''}
              />
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <>
                  Reconfiguration strategy
                  <QuestionCircleOutlined />
                </>
              }
            >
              <WarningTooltip
                showWarning={true}
                text={'No strategy'}
                withOutIcon={false}
                tooltipTitle={'Rules for determining how funding cycles can be reconfigured'}
              />
            </Descriptions.Item>
          </StyledDescriptions>
          <BottomInfo>
            <span>
              Address: {detail.country}
              <br />
              {detail.typeDescription}
            </span>
          </BottomInfo>
        </Panel>
      </Accordion>
    </div>
  );
};

export default ProjectAccordion;
