import React, { useState } from 'react';
import { ButtonWrapper, DrawersBottom, ItemsWrapper } from './DrawerItems.styled';
import DrawerItem from '../../atoms/DrawerItem';
import Button from '../../atoms/Button';
import { projects } from './mock';
import Forms from '../Forms';
import { HomeFormContext } from '../../../context/FormContext';

const DrawerItems = () => {
  const [formState, setFormState] = useState({});

  return (
    <ItemsWrapper>
      <HomeFormContext.Provider value={{ formState, setFormState }}>
        {projects.map(project => (
          <DrawerItem project={project} key={project.id}>
            <Forms id={project.id} />
          </DrawerItem>
        ))}
      </HomeFormContext.Provider>
      <DrawersBottom>
        <p>
          The JBX protocol is unaudited, and projects built on it may be vulnerable to bugs or
          exploits. Be smart!
        </p>
        <div className="buttons-wrapper">
          <ButtonWrapper>
            <Button outlined={true}>Start Over</Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button disabled={true} outlined={true}>
              Review & Deploy
            </Button>
          </ButtonWrapper>
        </div>
      </DrawersBottom>
    </ItemsWrapper>
  );
};

export default DrawerItems;
