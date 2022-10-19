import {
  SET_ALL_PROJECTS,
  SET_CURRENT_PROJECTS,
  SET_TRENDING_PROJECTS,
} from '../types/projectsTypes';
import { IProjectInterface } from '../../utils/models/project/projectState';

const initialState: IProjectInterface = {
  allProjects: [],
  trendingProjects: [],
  currentProject: {
    name: '',
    handle: '',
    description: '',
    website: '',
    logoUri: {
      forDark: '',
      forLight: '',
    },
    socials: {
      twitter: '',
      discord: '',
    },
    payButton: '!',
    payDisclosure: '',

    details: {
      trending: true,
      type: '',
      typeDescription: '',
      country: '',
      target: '',
      targetCur: '',
      startBlock: '',
      endBlock: '',
      xpub: '',
      perk: '',
      dividsible: false,
      perkID: '',
      perkRate: 0.1,
      perkRateBase: '',
      fixedRate: true,
      rateType: {
        usd: '',
        btc: '',
      },
      rate: 40000,
      reIssuable: false,
      notes: '',
    },

    summary: {
      totalRaised: '',
      raisedCur: '',
      raiseDetails: [
        {
          subraiseCur: '',
          subraiseAmt: 0.1,
          raisedCurAmt: 4000,
        },
      ],
    },

    activity: {
      deposits: [
        {
          network: '',
          currency: '',
          txid: '',
          timestamp: 1650619473,
          amount: 0.1,
        },
      ],
      withdrawals: [],
    },
  },
};

export const allProjectsReducer = (
  state: IProjectInterface = initialState,
  action: { type: string; payload: any },
): IProjectInterface => {
  switch (action.type) {
    case SET_ALL_PROJECTS:
      return { ...state, allProjects: action.payload };
    case SET_TRENDING_PROJECTS:
      return { ...state, trendingProjects: action.payload };
    case SET_CURRENT_PROJECTS:
      return { ...state, currentProject: action.payload };
    default:
      return state;
  }
};
