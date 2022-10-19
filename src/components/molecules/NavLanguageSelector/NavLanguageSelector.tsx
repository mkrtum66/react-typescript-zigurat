import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { GlobalOutlinedStyled, LanguageSelector, StyledSelect } from './NavLanguageSelector.styled';
import { languages } from './mock';
import { v4 as uuid } from 'uuid';
const { Option } = Select;

const NavLanguageSelector = ({ mobile }: { mobile?: boolean }) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    function handleClick() {
      setDropdownOpen(false);
    }
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };

  return (
    <LanguageSelector
      onClick={e => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
      }}
    >
      <GlobalOutlinedStyled />
      <StyledSelect
        defaultValue={!mobile ? 'EN' : 'English'}
        open={dropdownOpen}
        onChange={newLanguage => {
          handleChange(newLanguage);
        }}
        bordered={false}
        dropdownMatchSelectWidth={false}
        getPopupContainer={trigger => trigger.parentElement as HTMLElement}
      >
        {languages.map(lang => {
          return (
            <Option key={uuid()} value={lang.language}>
              {mobile ? lang.mobileTitle : lang.title}
            </Option>
          );
        })}
      </StyledSelect>
    </LanguageSelector>
  );
};

export default NavLanguageSelector;
