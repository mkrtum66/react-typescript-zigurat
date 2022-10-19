import React, { useContext } from 'react';
import { Section, Wrapper } from '../../../styles/global';
import { Image } from './HomPage.styled';
import Header from '../../organisms/HomePage/Header';
import Trending from '../../organisms/HomePage/Trending';
import ThirdSection from '../../organisms/HomePage/ThirdSection';
import FourthSection from '../../organisms/HomePage/FourthSection';
import FifthSection from '../../organisms/HomePage/FifthSection';
import SixthSection from '../../organisms/HomePage/SixthSection';
import SeventhSection from '../../organisms/HomePage/SeventhSection';
import { data } from '../../organisms/HomePage/SeventhSection/mock';
import ThemeContext from '../../../context/ThemeContext';
const od = require('../../../assets/zig-4-w.png');
const ol = require('../../../assets/zig-4-b.png');

const HomePage = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Wrapper>
        <Section maxWidth={1080}>
          <Header />
        </Section>
      </Wrapper>
      <Trending />
      <Wrapper>
        <Section maxWidth={1080}>
          <ThirdSection />
        </Section>
      </Wrapper>
      <Wrapper>
        <Section maxWidth={1080}>
          <FourthSection />
        </Section>
      </Wrapper>
      <div id="create">
        <FifthSection />
      </div>
      <SixthSection />
      <div id="faq">
        <SeventhSection items={data} />
      </div>
      <div style={{ paddingBottom: 10 }}>
        <Image src={theme === 'light' ? ol : od} alt="Zigurat" />
      </div>
    </div>
  );
};

export default HomePage;
