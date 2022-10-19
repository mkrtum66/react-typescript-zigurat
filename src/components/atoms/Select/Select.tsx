import React from 'react';
import { Select } from 'antd';
import { v4 as uuid } from 'uuid';
import { OptionProps } from './types';
import { SelectWrapper, StyledSelect } from './Select.styled';
const { Option } = Select;

const OurSelect = ({ ...props }) => {
  return (
    <SelectWrapper>
      <StyledSelect {...props}>
        {props.options?.map((option: OptionProps) => (
          <Option key={uuid()} value={option.value} disabled={option.disabled}>
            {option.label}
          </Option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default OurSelect;
