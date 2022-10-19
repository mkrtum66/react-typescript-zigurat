import { IProjectInterface } from './project/projectState';
import { ILoaderState } from './loader/loaderState';
import { IWalletState } from './wallet/walletState';
import {IInvoices} from "./invoices/invoices";

export interface IGlobalState {
  wallet: IWalletState;
  loading: ILoaderState;
  projects: IProjectInterface;
  invoices: IInvoices
}
