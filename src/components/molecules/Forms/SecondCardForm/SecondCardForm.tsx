import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import OurSelect from '../../../atoms/Select';
import { FieldWrapper } from '../Forms.styled';
import TextField from '../../../atoms/TextField';
import Button from '../../../atoms/Button';
import { data } from './mock';
import { SelectLabel } from '../../../atoms/Select/Select.styled';
import { Information, Label } from '../../../atoms/TextField/TextField.styled';
import { SecondCardFormProps } from './types';
import TextArea from '../../../atoms/TextArea';
import { StyledLabel } from '../../../atoms/YesNo/YesNo.Styled';
import { YesOrNo } from '../ThirdCardForm/ThirdCardForm.styled';
import Switcher from '../../../atoms/Switcher';
import DatePicker from '../../../atoms/DatePicker';

const SecondCardForm = () => {
  const initialState = {
    type: data.types[0].label,
    typeDescription: '',
    // typeName: '',
    country: data.countries[0].label,
    isFixedTarget: true,
    target: '',
    xpub: '',
  };
  const [state, setState] = useState<SecondCardFormProps>(initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setState(prevState => ({ ...prevState, [`${key}`]: e.target.value }));
  };

  const handleSelect = (value: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setState(prevState => ({ ...prevState, [`${key}`]: value }));
  };
  const handleDivisible = (checked: boolean) => {
    setState(prevState => ({ ...prevState, isFixedTarget: true }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <form action="/" onSubmit={handleSubmit}>
      <FieldWrapper>
        <SelectLabel>Type</SelectLabel>
        <OurSelect
          options={data.types}
          value={state.type}
          defaultValue={state.type}
          onSelect={(value: React.ChangeEvent<HTMLInputElement>) => handleSelect(value, 'type')}
          optionFilterProp={'label'}
          optionLabelProp={'label'}
          getPopupContainer={(trigger: { parentElement: HTMLElement }) =>
            trigger.parentElement as HTMLElement
          }
        />
        <Information />
      </FieldWrapper>
      <FieldWrapper>
        <Label htmlFor="projectDescription">Description</Label>
        <TextArea
          id={'projectDescription'}
          rows={2}
          placeholder={`${1000} characters max`}
          maxLength={1000}
          value={state.typeDescription}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'description')}
        />
        <Information />
      </FieldWrapper>
      <FieldWrapper>
        <SelectLabel>Country</SelectLabel>
        <OurSelect
          options={data.countries}
          value={state.country}
          defaultValue={state.country}
          onSelect={(value: React.ChangeEvent<HTMLInputElement>) => handleSelect(value, 'country')}
          optionFilterProp={'label'}
          optionLabelProp={'label'}
          getPopupContainer={(trigger: { parentElement: HTMLElement }) =>
            trigger.parentElement as HTMLElement
          }
        />
        <Information />
      </FieldWrapper>
      <FieldWrapper>
        <StyledLabel>Fixed Target?</StyledLabel>
        <YesOrNo>
          <p className={!state.isFixedTarget ? 'active' : ''}>No</p>
          <Switcher checked={state.isFixedTarget} onChange={handleDivisible} />
          <p className={state.isFixedTarget ? 'active' : ''}>Yes</p>
        </YesOrNo>
      </FieldWrapper>
      {state.isFixedTarget && (
        <FieldWrapper>
          <TextField
            type={'text'}
            id={uuid()}
            label={'Target*'}
            onChange={e => handleChange(e, 'target')}
            value={state.target}
            placeholder={'Target'}
          />
        </FieldWrapper>
      )}

      <FieldWrapper>
        <StyledLabel>End Date</StyledLabel>
        <DatePicker />
        <Information />
      </FieldWrapper>
      <FieldWrapper>
        <TextField
          type={'text'}
          id={uuid()}
          label={'XPUB'}
          onChange={e => handleChange(e, 'xpub')}
          value={state.xpub}
          placeholder={'xpub'}
        />
      </FieldWrapper>
      <Button type="submit">Save details</Button>
    </form>
  );
};

export default SecondCardForm;
