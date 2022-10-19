import { useDispatch } from 'react-redux';
import { AppDispatchProps } from '../redux/types';

export const useAppDispatch = () => useDispatch<AppDispatchProps>();
