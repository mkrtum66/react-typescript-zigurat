import styled from 'styled-components';
import { Switch } from 'antd';

export const StyledSwitch = styled(Switch)`
  outline: 0;
  background: var(--background-l1);
  &.ant-switch-checked {
    background: var(--background-action-primary);
  }
`;
