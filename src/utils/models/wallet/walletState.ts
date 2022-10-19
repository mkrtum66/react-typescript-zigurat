export interface IWalletState {
  enabled: boolean;
  data: {
    address: string;
    publicKey: string;
    signature: string;
  };
}
