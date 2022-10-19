import React, { useContext } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import {
  Item,
  Left,
  Right,
  Number,
  ImageWrapper,
  Image,
  ItemTitle,
  Desc,
  Payments,
} from './TrendingItem.styled';
import { ProjectProps } from '../../../utils/models/project/projectState';

const TrendingItem = ({ data, num }: { data: ProjectProps; num: number }) => {
  const theme = useContext(ThemeContext);
  return (
    <Item>
      <Left>
        <Number>{num + 1}</Number>
        <ImageWrapper>
          <Image
            src={theme === 'light' ? data.logoUri.forLight : data.logoUri.forDark}
            alt={theme === 'light' ? data.logoUri.forLight : data.logoUri.forDark}
          />
        </ImageWrapper>
      </Left>
      <Right>
        <ItemTitle>{data.name}</ItemTitle>
        <Desc>
          <span style={{ marginRight: '10px' }}>
            <b>
              <span>₿ </span>
              {data.summary.raiseDetails[0].subraiseAmt}
            </b>
          </span>
        </Desc>
        <Payments>{data.summary.raiseDetails.length} payments</Payments>
      </Right>
    </Item>
  );
};

export default TrendingItem;
