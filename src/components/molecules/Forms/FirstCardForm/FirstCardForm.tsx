import React, { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FieldWrapper } from '../Forms.styled';
import TextField from '../../../atoms/TextField';
import Button from '../../../atoms/Button';
import UploadFile from '../../../atoms/UploadFile';
import TextArea from '../../../atoms/TextArea';
import { Information, Label } from '../../../atoms/TextField/TextField.styled';
import Modal from '../../../atoms/Modal';
import { SelectLabel } from '../../../atoms/Select/Select.styled';
import OurSelect from '../../../atoms/Select';
import { data } from './mock';
import { Tag } from 'antd';
import { AccountProps, FirstCardFormProps } from './types';
import { WithButtonFieldWrapper } from './FirstCardForm.styled';
import { HomeFormContext } from '../../../../context/FormContext';

const FirstCardForm = () => {
  const initialState = {
    name: '',
    handle: '',
    description: '',
    website: '',
    disclosure: '',
    socials: {},
  };
  const { formState, setFormState } = useContext(HomeFormContext);
  const [state, setState] = useState<FirstCardFormProps>(initialState);
  const [accounts, setAccounts] = useState<AccountProps[]>([]);
  const [firstInputValue, setFirstInputValue] = useState('');
  const [secondInputValue, setSecondInputValue] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setState(prevState => ({ ...prevState, [`${key}`]: event.target.value }));
  };
  const handleSelect = (value: AccountProps[]) => {
    setAccounts([...value]);
  };

  const handleAdd = (e: any, key: any, value: string) => {
    e.preventDefault();
    setAccounts([
      ...accounts.map((item: any) => {
        if (item.key === key) {
          return { ...item, url: value };
        }
        return item;
      }),
    ]);
  };

  const acceptSocialModal = () => {
    if (state.socials) {
      accounts.map(account =>
        setState(prevState => ({
          ...prevState,
          socials: { ...prevState.socials, [account.key]: account.url },
        })),
      );
    }
    setIsModalVisible(false);
  };
  const handleDeleteChosenSocial = (val: string) => {
    const asArray = Object.entries(state.socials);
    const filtered = asArray.filter(([key, value]) => key !== val);
    const newObj = Object.fromEntries(filtered);
    setState(prevState => ({ ...prevState, socials: newObj }));

    const filteredData = accounts.filter(item => item.key !== val);
    setAccounts([...filteredData]);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState({ ...formState, state });
  };

  return (
    <form action="/" onSubmit={handleSubmit}>
      <FieldWrapper>
        <TextField
          type={'text'}
          id={uuid()}
          label={'Project name'}
          onChange={e => handleChange(e, 'name')}
          value={state.name}
          placeholder={'Project name'}
          required={true}
        />
      </FieldWrapper>
      <FieldWrapper>
        <TextField
          type={'text'}
          id={uuid()}
          label={'Project handle'}
          onChange={e => handleChange(e, 'handle')}
          value={state.handle}
          placeholder={'Project handle'}
          required={true}
          extraInfo={'Project handle must be unique.'}
          icon={'@'}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Label htmlFor="projectDescription">Project description</Label>
        <TextArea
          id={'projectDescription'}
          rows={2}
          placeholder={`${1000} characters max`}
          maxLength={1000}
          value={state.description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'description')}
        />
        <Information></Information>
      </FieldWrapper>
      <FieldWrapper>
        <TextField
          type={'text'}
          id={uuid()}
          label={'Website'}
          onChange={e => handleChange(e, 'website')}
          value={state.website}
          placeholder={'Website'}
          extraInfo={"Your project's website."}
        />
      </FieldWrapper>
      <FieldWrapper>
        <SelectLabel>Socials</SelectLabel>
        <div>
          {state.socials
            ? Object.entries(state.socials).map(item => (
                <Tag
                  closable
                  key={item[0]}
                  onClose={() => handleDeleteChosenSocial(item[0])}
                  style={{ marginBottom: '8px' }}
                >
                  {item[0]}
                </Tag>
              ))
            : ''}
        </div>
        <Button
          type={'button'}
          dashed
          onClick={() => setIsModalVisible(true)}
          style={{ width: '100%' }}
        >
          Add an account
        </Button>
        <Modal
          // transitionName=""
          maskTransitionName={''}
          centered={true}
          title={'Social'}
          visible={isModalVisible}
          onCancel={() => {
            setIsModalVisible(false);
            setAccounts([]);
            setFirstInputValue('');
            setSecondInputValue('');
          }}
          wrapClassName={'modal-wrapper'}
          getContainer={false}
          okText={'Add Social'}
          onOk={acceptSocialModal}
        >
          <FieldWrapper>
            <SelectLabel>Choose Social</SelectLabel>
            <OurSelect
              mode={'tags'}
              options={data.socials}
              value={accounts}
              onChange={(value: AccountProps[]) => handleSelect(value)}
              labelInValue={true}
              optionFilterProp={'label'}
              optionLabelProp={'label'}
              getPopupContainer={(trigger: { parentElement: HTMLElement }) =>
                trigger.parentElement as HTMLElement
              }
            />
            {accounts[0] && accounts[0].key ? (
              <WithButtonFieldWrapper>
                <TextField
                  withOutLabel={true}
                  withOutExtra={true}
                  type={'text'}
                  id={uuid()}
                  onChange={e => setFirstInputValue(e.target.value)}
                  value={firstInputValue}
                  placeholder={`${accounts[0].label} Url`}
                />
                <button onClick={e => handleAdd(e, accounts[0].key, firstInputValue)}>
                  {accounts[0].url ? 'Added' : 'Add'}
                </button>
              </WithButtonFieldWrapper>
            ) : (
              ''
            )}
            {accounts[1] && accounts[1].key ? (
              <WithButtonFieldWrapper>
                <TextField
                  withOutLabel={true}
                  withOutExtra={true}
                  type={'text'}
                  id={uuid()}
                  onChange={e => setSecondInputValue(e.target.value)}
                  value={secondInputValue}
                  placeholder={`${accounts[1].label} Url`}
                />
                <button onClick={e => handleAdd(e, accounts[1].key, secondInputValue)}>
                  {accounts[1].url ? 'Added' : 'Add'}
                </button>
              </WithButtonFieldWrapper>
            ) : (
              ''
            )}
          </FieldWrapper>
        </Modal>
      </FieldWrapper>
      <FieldWrapper>
        <UploadFile label={'Logo'} />
      </FieldWrapper>
      <FieldWrapper>
        <UploadFile label={'Deck'} />
      </FieldWrapper>
      <FieldWrapper>
        <TextField
          type={'text'}
          id={uuid()}
          label={'Pay disclosure'}
          onChange={e => handleChange(e, 'disclosure')}
          value={state.disclosure}
          placeholder={'Pay disclosure'}
          extraInfo={
            'This text will be displayed to your supporters before they complete their payment.'
          }
        />
      </FieldWrapper>
      <Button type={'submit'}>Save project details</Button>
    </form>
  );
};

export default FirstCardForm;
