import { IInvoices } from '../../utils/models/invoices/invoices';

export const SET_INVOICES = 'SET_INVOICES';

const initialState: IInvoices = {
  invoice: {
    metadata: {},
    checkout: {},
    id: '',
    storeId: '',
    amount: '',
    currency: '',
    type: '',
    checkoutLink: '',
    createdTime: null,
    expirationTime: null,
    monitoringTime: null,
    status: '',
    additionalStatus: '',
    availableStatusesForManualMarking: [],
    archived: true,
  },
};

export const invoicesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_INVOICES:
      return { ...state, invoice: action.payload };
    default:
      return state;
  }
};
