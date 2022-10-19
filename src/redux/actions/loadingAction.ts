import { SET_LOADING } from '../reducers/loadingReducer';

export const setLoading = (data: boolean) => {
  return {
    type: SET_LOADING,
    payload: data,
  };
};
