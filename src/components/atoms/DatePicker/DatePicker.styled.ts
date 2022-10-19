import styled from 'styled-components';
import { DatePicker } from 'antd';

export const StyledDatePicker = styled(DatePicker)`
  font-size: 14px;
  background: transparent;
  color: var(--text-primary);
  border-radius: var(--radius-sm);
  box-sizing: border-box;
  margin: 0;
  font-variant: tabular-nums;
  list-style: none;
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 1.5715;
  border: 1px solid var(--stroke-secondary);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    border-color: var(--stroke-primary);
  }
`;
