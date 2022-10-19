import { createContext } from 'react';

export const HomeFormContext = createContext<{ formState?: any; setFormState?: any }>({});
