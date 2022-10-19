import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IGlobalState } from '../utils/models/globalState';

export const useAppSelector: TypedUseSelectorHook<IGlobalState> = useSelector;
