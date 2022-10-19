import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
  --background-l0: #fbf9f6;
  --background-l1: #e7e3dc;
  --background-l2: #f3f1ec;
  --background-disabled: #00000018;
  --background-tranding: rgba(231,227,220,0.5);
  --background-tranding1: rgba(231,227,220,1);
  --background-loggedInBtn: rgb(243, 241, 236);
  --background-success: green;
  --background-warn: #d8aa01;
  --background-failure: tomato;
  --background-brand-primary: #f5a312;
  --background-brand-secondary: #FFECBB;
  --background-action-primary: #18b4c7;
  --background-action-secondary: #32c8db44;
  --background-action-highlight: #3dd1e4;
  --text-primary: #000000ee;
  --text-secondary: #00000099;
  --text-tertiary: #00000055;
  --text-placeholder: #00000055;
  --text-disabled: #00000044;
  --text-success: green;
  --text-warn: #d8aa01;
  --text-failure: tomato;
  --text-header: #f5a312;
  --text-action-primary: #18b4c7;
  --text-action-secondary: #18b4c7;
  --text-action-highlight: #25c4d8;
  --text-brand-primary: #f5a312;
  --text-brand-secondary: #FFECBB;
  --text-over-brand-primary: #fff;
  --text-over-brand-secondary: #000;
  --text-over-action-primary: #fff;
  --text-over-action-secondary: #18b4c7;
  --text-over-action-highlight: #000000ee;
  --text-over-success: #fff;
  --text-over-warn: #fff;
  --text-over-failure: #fff;
  --text-over-disabled: #00000055;
  --icon-primary: #000000ee;
  --icon-secondary: #00000099;
  --icon-tertiary: #00000055;
  --icon-disabled: #00000044;
  --icon-success: green;
  --icon-warn: #d8aa01;
  --icon-failure: tomato;
  --icon-action-primary: #18b4c7;
  --icon-action-secondary: #18b4c7;
  --icon-brand-primary: #f5a312;
  --icon-brand-secondary: #FFECBB;
  --icon-over-brand-primary: #fff;
  --icon-over-brand-secondary: #000;
  --icon-over-action-primary: #fff;
  --icon-over-action-secondary: #18b4c7;
  --icon-over-action-highlight: #25c4d8;
  --icon-over-success: #fff;
  --icon-over-warn: #fff;
  --icon-over-failure: #fff;
  --icon-over-disabled: #00000055;
  --stroke-primary: #00000048;
  --stroke-secondary: #00000032;
  --stroke-tertiary: #00000018;
  --stroke-success: green;
  --stroke-warn: #d8aa01;
  --stroke-failure: tomato;
  --stroke-disabled: #00000018;
  --stroke-action-primary: #18b4c7;
  --stroke-action-secondary: #32c8db44;
  --stroke-action-highlight: #3dd1e4;
  --boxShadow-primary: rgba(0, 0, 0, 0.1);
  --selection-background: #c1e8e9;
  --selection-color: #1e241d;
  --radius-xs: 1px;
  --radius-sm: 1px;
  --radius-md: 1px;
  --radius-lg: 1px;
  --radius-xl: 1px;
}

[data-theme='dark']{
  --background-l0: #1c1b21;
  --background-l1: #2e2b3c;
  --background-l2: #494361;
  --background-disabled: #e1e0e844;
  --background-tranding: rgb(46, 43, 60);
  --background-tranding1: rgb(46, 43, 60);
  --background-loggedInBtn: rgb(73, 67, 97);;
  --background-success: #159e40;
  --background-warn: #e7d82a;
  --background-failure: tomato;
  --background-brand-primary: #FFB32C;
  --background-brand-secondary: #FFECBB;
  --background-action-primary: #32c8db;
  --background-action-secondary: #32c8db22;
  --background-action-highlight: #38e9ff;
  --text-primary: #e1e0e8;
  --text-secondary: #e1e0e8d8;
  --text-tertiary: #e1e0e8a4;
  --text-placeholder: #e1e0e844;
  --text-disabled: #e1e0e8a4;
  --text-success: #159e40;
  --text-warn: #e7d82a;
  --text-failure: tomato;
  --text-header: #FFB32C;
  --text-action-primary: #32c8db;
  --text-action-secondary: #32c8db;
  --text-action-highlight: #38e9ff;
  --text-brand-primary: #FFB32C;
  --text-brand-secondary: #FFECBB;
  --text-over-brand-primary: #fff;
  --text-over-brand-secondary: #000;
  --text-over-action-primary: #1c1b21;
  --text-over-action-secondary: #e1e0e8;
  --text-over-action-highlight: #1c1b21;
  --text-over-success: #fff;
  --text-over-warn: #fff;
  --text-over-failure: #fff;
  --text-over-disabled: #e1e0e8a4;
  --icon-primary: #e1e0e8;
  --icon-secondary: #e1e0e8d8;
  --icon-tertiary: #e1e0e8a4;
  --icon-disabled: #e1e0e8a4;
  --icon-success: #159e40;
  --icon-warn: #e7d82a;
  --icon-failure: tomato;
  --icon-action-primary: #32c8db;
  --icon-action-secondary: #32c8db;
  --icon-brand-primary: #FFB32C;
  --icon-brand-secondary: #FFECBB;
  --icon-over-brand-primary: #fff;
  --icon-over-brand-secondary: #000;
  --icon-over-action-primary: #fff;
  --icon-over-action-secondary: #32c8db;
  --icon-over-action-highlight: #1c1b21;
  --icon-over-success: #fff;
  --icon-over-warn: #fff;
  --icon-over-failure: #fff;
  --icon-over-disabled: #e1e0e8a4;
  --stroke-primary: #e1e0e8d8;
  --stroke-secondary: #e1e0e8a4;
  --stroke-tertiary: #e1e0e844;
  --stroke-success: #159e40;
  --stroke-warn: #e7d82a;
  --stroke-failure: tomato;
  --stroke-disabled: #e1e0e824;
  --stroke-action-primary: #32c8db;
  --stroke-action-secondary: #e1e0e844;
  --stroke-action-highlight: #38e9ff;
  --boxShadow-primary: #000000;
  --selection-background: #465571;
  --selection-color: #e1e0e8;
  --radius-xs: 1px;
  --radius-sm: 1px;
  --radius-md: 1px;
  --radius-lg: 1px;
  --radius-xl: 1px;
}

*{
  font-family: 'DM Mono', monospace;
  box-sizing: border-box;
  margin: 0;
  &::selection {
    background: var(--selection-background);
    color: var(--selection-color);
  }
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.App{
  background-color: var(--background-l0);
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--text-primary);
}
.ant-dropdown-menu{
  background-color: var(--background-l0);
  border: 1px solid var(--stroke-tertiary);
  box-shadow: 0 8px 12px var(--boxShadow-primary);
}
.ant-drawer-content{
  background-color: var(--background-l0);
}

`;

export const Wrapper = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  @media (max-width: 767px) {
    margin-top: 80px;
  }
`;
export const Section = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  ${({ maxWidth }: { maxWidth?: number }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth}px;
    `}
`;

export default GlobalStyle;
