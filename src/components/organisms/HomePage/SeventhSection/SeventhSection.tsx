import React from 'react';
import { v4 as uuid } from 'uuid';
import { Section } from '../../../../styles/global';
import { Accordion, SectionContent } from './SeventhSection.styled';
import { Collapse } from 'antd';
import { ItemsProps } from './types';
const { Panel } = Collapse;

const SeventhSection = ({ items }: ItemsProps) => {
  return (
    <Section maxWidth={800} style={{ padding: '80px 0' }}>
      <SectionContent>
        <h1>FAQs</h1>
        <Accordion accordion>
          {items.map((item, i) => {
            return (
              <Panel header={item.title} key={i + 1}>
                {item.texts.map(text => (
                  <p key={uuid()} dangerouslySetInnerHTML={{ __html: text.text }} />
                ))}
              </Panel>
            );
          })}
        </Accordion>
      </SectionContent>
    </Section>
  );
};

export default SeventhSection;
