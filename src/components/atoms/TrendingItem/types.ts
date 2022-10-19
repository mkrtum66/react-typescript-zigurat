export type TrendProps = {
  name: string;
  handle: string;
  description: string;
  logoUri: { forDark: string; forLight: string };
  website: string;
  socials: { twitter: string; discord: string };
  payButton: string;
  payDisclosure: string;
  details: DetailProps;
  summary: SummaryProps;
  activity: ActivitieProps;
};

export type ActivitieProps = {
  deposits: Deposit[];
  withdrawals: never[];
};
export type Deposit = {
  network: string;
  currency: string;
  txid: string;
  timestamp: number;
  amount: number;
};
export type SummaryProps = {
  totalRaised: number | string;
  raisedCur: string;
  raiseDetails: RaiseDetail[];
};
export type RaiseDetail = {
  subraiseCur: string;
  subraiseAmt: number;
  raisedCurAmt: number;
};
export type DetailProps = {
  trending: boolean;
  type: string;
  typeDescription: string;
  country: string;
  target: string;
  targetCur: string;
  startBlock: string;
  endBlock: string;
  xpub: string;
  perk: string;
  dividsible: boolean;
  perkID: string;
  perkRate: number;
  perkRateBase: string;
  fixedRate: boolean;
  rateType: { usd: string; btc: string };
  rate: number;
  reIssuable: boolean;
  notes: string;
};
