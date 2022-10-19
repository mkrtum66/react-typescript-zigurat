import { SET_INVOICES } from '../reducers/invoicesReducer';

export const setInvoices = (data: any) => {
  return {
    type: SET_INVOICES,
    payload: data,
  };
};
