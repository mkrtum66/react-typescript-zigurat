export interface IInvoices {
  invoice: {
    token?: { name: string; handle: string };
    count?: number;
    metadata: {};
    checkout: {};
    id: string;
    storeId: string;
    amount: string;
    currency: string;
    type: string;
    checkoutLink: string;
    createdTime: number | null;
    expirationTime: number | null;
    monitoringTime: number | null;
    status: string;
    additionalStatus: string;
    availableStatusesForManualMarking: string[];
    archived: true;
  };
}
