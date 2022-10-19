import { ILoaderState } from '../../utils/models/loader/loaderState';

export const SET_LOADING = 'SET_LOADING';

const initialState: ILoaderState = {
  isLoading: false,
};

export const loadingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
