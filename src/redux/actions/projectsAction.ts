import {
  SET_CURRENT_PROJECTS,
  SET_ALL_PROJECTS,
  SET_TRENDING_PROJECTS,
} from '../types/projectsTypes';

export const setAllFetchedProjects = (data: any) => {
  return {
    type: SET_ALL_PROJECTS,
    payload: data,
  };
};
export const setCurrentProjects = (data: any) => {
  return {
    type: SET_CURRENT_PROJECTS,
    payload: data,
  };
};

export const setTrendingFetchedProjects = (data: any) => {
  return {
    type: SET_TRENDING_PROJECTS,
    payload: data,
  };
};
