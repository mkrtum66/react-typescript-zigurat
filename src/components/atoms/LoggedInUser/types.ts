export interface IWalletData {
  enabled: boolean;
  data: WalletData;
}
export type WalletData = {
  address: string;
  publicKey: string;
  signature: string;
};
