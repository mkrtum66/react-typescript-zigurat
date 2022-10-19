import { setLoading } from '../actions/loadingAction';
import axios from 'axios';
import { AppDispatchProps } from '../types';
import {
  setAllFetchedProjects,
  setCurrentProjects,
  setTrendingFetchedProjects,
} from '../actions/projectsAction';

export const setAllProjectsThunk = () => async (dispatch: AppDispatchProps) => {
  dispatch(setLoading(true));
  const allProjects = await axios
    .get(`${process.env.REACT_APP_BASE_API_URL}/project`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.data.data);
  dispatch(setAllFetchedProjects(allProjects));
  dispatch(setLoading(false));
};

export const setTrendingProjectsThunk = () => async (dispatch: AppDispatchProps) => {
  dispatch(setLoading(true));
  const trendingProjects = await axios
    .get(`${process.env.REACT_APP_BASE_API_URL}/project?trending`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.data.data);
  dispatch(setTrendingFetchedProjects(trendingProjects));
  dispatch(setLoading(false));
};

export const getProjectByNameThunk = (name?: string) => async (dispatch: AppDispatchProps) => {
  dispatch(setLoading(true));
  const projectByName = await axios
    .get(`${process.env.REACT_APP_BASE_API_URL}/project?name=${name}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.data.data[0]);
  dispatch(setCurrentProjects(projectByName));
  dispatch(setLoading(false));
};
