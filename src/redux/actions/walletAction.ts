import { CLEAR_WALLET_DATA, SET_WALLET_DATA, SET_WALLET_ENABLE } from '../types/walletTypes';

export const setWalletData = (data: any) => {
  return {
    type: SET_WALLET_DATA,
    payload: data,
  };
};
export const setWalletEnable = (enabled: boolean) => {
  return {
    type: SET_WALLET_ENABLE,
    payload: enabled,
  };
};
export const clearWalletData = () => {
  return {
    type: CLEAR_WALLET_DATA,
  };
};
