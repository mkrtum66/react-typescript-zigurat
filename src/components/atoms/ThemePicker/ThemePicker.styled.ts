import styled from 'styled-components';

export const ThemePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  width: 60px;
  margin-right: 10px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid var(--stroke-tertiary);
  transition: border-color 0.12s ease-out;
`;
export const Sun = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6px;
  padding-bottom: 6px;
  svg {
    fill: var(--text-primary);
  }
  &.dark {
    svg {
      fill: var(--text-placeholder);
    }
  }
`;
export const Moon = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6px;
  padding-bottom: 6px;
  svg {
    fill: var(--text-placeholder);
  }
  &.dark {
    svg {
      fill: var(--text-primary);
    }
  }
`;
export const MobileThemePicker = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  & > div {
    display: flex;
    align-items: center;
  }
  p {
    color: var(--text-primary);
    margin-bottom: 0;
    margin-left: 6px;
  }
`;
