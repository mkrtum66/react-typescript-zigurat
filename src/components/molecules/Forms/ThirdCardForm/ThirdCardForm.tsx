import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FieldWrapper } from '../Forms.styled';
import TextField from '../../../atoms/TextField';
import Button from '../../../atoms/Button';
import { StyledLabel } from '../../../atoms/YesNo/YesNo.Styled';
import Switcher from '../../../atoms/Switcher';
import { YesOrNo } from './ThirdCardForm.styled';
import type { ThirdCardFormProps } from './types';
import { Information, Label } from '../../../atoms/TextField/TextField.styled';
import TextArea from '../../../atoms/TextArea';
import { TICKER } from '../../../../validators/regExs';

const ThirdCardForm = () => {
  const initialState = {
    ticker: '',
    divisible: false,
    emissionRate: '',
    reusable: false,
    description: '',
  };
  const [state, setState] = useState<ThirdCardFormProps>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setState(prevState => ({ ...prevState, [`${key}`]: event.target.value }));
  };
  const handleDivisible = (checked: boolean) => {
    setState(prevState => ({ ...prevState, divisible: false }));
  };
  const handleReusable = (checked: boolean) => {
    setState(prevState => ({ ...prevState, reusable: false }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <form action="/" onSubmit={handleSubmit}>
      <FieldWrapper>
        <TextField
          type={'text'}
          id={uuid()}
          label={'Ticker'}
          onChange={e => handleChange(e, 'ticker')}
          value={state.ticker}
          placeholder={'Ticker'}
          validated={TICKER.test(state.ticker)}
          maxLength={7}
        />
      </FieldWrapper>
      <FieldWrapper>
        <StyledLabel>Divisible ?</StyledLabel>
        <YesOrNo>
          <p className={!state.divisible ? 'active' : ''}>No</p>
          <Switcher checked={state.divisible} onChange={handleDivisible} />
          <p className={state.divisible ? 'active' : ''}>Yes</p>
        </YesOrNo>
        <Information />
      </FieldWrapper>
      <FieldWrapper>
        <TextField
          type={'text'}
          id={uuid()}
          label={'Emission Rate'}
          onChange={e => handleChange(e, 'emissionRate')}
          value={state.emissionRate}
          placeholder={'Emission Rate'}
          extraInfo={`total emisison [target/emission rate] {perk} tokens`}
        />
      </FieldWrapper>
      <FieldWrapper>
        <StyledLabel>Reusable ?</StyledLabel>
        <YesOrNo>
          <p className={!state.reusable ? 'active' : ''}>No</p>
          <Switcher checked={state.reusable} onChange={handleReusable} />
          <p className={state.reusable ? 'active' : ''}>Yes</p>
        </YesOrNo>
        <Information />
      </FieldWrapper>
      <FieldWrapper>
        <Label htmlFor="perkDescription">Description</Label>
        <TextArea
          id={'perkDescription'}
          rows={2}
          placeholder={`${1000} characters max`}
          maxLength={1000}
          value={state.description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'description')}
        />
        <Information />
      </FieldWrapper>
      <Button type="submit">Save details</Button>
    </form>
  );
};

export default ThirdCardForm;
