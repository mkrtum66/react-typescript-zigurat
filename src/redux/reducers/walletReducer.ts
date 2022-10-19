import { CLEAR_WALLET_DATA, SET_WALLET_DATA, SET_WALLET_ENABLE } from '../types/walletTypes';
import { IWalletState } from '../../utils/models/wallet/walletState';

const initialState: IWalletState = {
  enabled: false,
  data: {
    address: '',
    publicKey: '',
    signature: '',
  },
};

export const walletReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_WALLET_DATA:
      return { ...state, data: action.payload };
    case SET_WALLET_ENABLE:
      return { ...state, enabled: action.payload };
    case CLEAR_WALLET_DATA:
      return { ...state, data: { address: '', publicKey: '', signature: '' } };
    default:
      return state;
  }
};
