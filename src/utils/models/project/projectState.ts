export interface IProjectInterface {
  allProjects: ProjectProps[];
  trendingProjects: ProjectProps[];
  currentProject: ProjectProps;
}

export type ProjectProps = {
  name: string;
  handle: string;
  description: string;
  website: string;
  logoUri: ProjectLogoUriProps;
  socials: ProjectSocialsProps;
  payButton: string;
  payDisclosure: string;
  details: ProjectDetailProps;
  summary: ProjectSummaryProps;
  activity: ProjectActivityProps;
};

export type ProjectDepositProps = {
  network: string;
  currency: string;
  txid: string;
  timestamp: number;
  amount: number;
};
export type ProjectRaiseDetailsProps = {
  subraiseCur: string;
  subraiseAmt: number;
  raisedCurAmt: number;
};
export type ProjectLogoUriProps = {
  forDark: string;
  forLight: string;
};
export type ProjectSocialsProps = {
  twitter: string;
  discord: string;
};
export type ProjectDetailProps = {
  trending: boolean;
  type: string;
  typeDescription: string;
  country: string;
  target: string | number;
  targetCur: string;
  startBlock: string | number;
  endBlock: string | number;
  xpub: string;
  perk: string;
  dividsible: boolean;
  perkID: string;
  perkRate: number;
  perkRateBase: string;
  fixedRate: boolean;
  rateType: {
    usd: string;
    btc: string;
  };
  rate: number;
  reIssuable: boolean;
  notes: string;
};
export type ProjectSummaryProps = {
  totalRaised: string | number;
  raisedCur: string;
  raiseDetails: ProjectRaiseDetailsProps[];
};
export type ProjectActivityProps = {
  deposits: ProjectDepositProps[];
  withdrawals: [];
};
