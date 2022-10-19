import React from 'react';
import { StyledLoading } from './SmallLoader.styled';

const SmallLoader = () => {
  return (
    <StyledLoading>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }}
        width="44px"
        height="44px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="50" cy="50" r="0" fill="none" stroke="#ffcb00" strokeWidth="7">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="0.9174311926605504s"
            values="0;60"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="0s"
          />
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="0.9174311926605504s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="0s"
          />
        </circle>
        <circle cx="50" cy="50" r="0" fill="none" stroke="#00eeff" strokeWidth="7">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="0.9174311926605504s"
            values="0;60"
            keyTimes="0;1"
            keySplines="0 0.2 0.8 1"
            calcMode="spline"
            begin="-0.4587155963302752s"
          />
          <animate
            attributeName="opacity"
            repeatCount="indefinite"
            dur="0.9174311926605504s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0.2 0 0.8 1"
            calcMode="spline"
            begin="-0.4587155963302752s"
          />
        </circle>
      </svg>
    </StyledLoading>
  );
};

export default SmallLoader;
