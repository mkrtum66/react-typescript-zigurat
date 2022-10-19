import axios from 'axios';

export const getInvoiceInfo = async (storeId: string, invoiceId: string) => {
  const response = await axios.get(
    `https://pay.onlyanons.com/api/v1/stores/${storeId}/invoices/${invoiceId}/payment-methods`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: `token ${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
      },
    },
  );
  if (response.status === 200) {
    return response;
  } else {
    console.error('Something went wrong');
  }
};
