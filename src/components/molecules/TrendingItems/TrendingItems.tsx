import React, { useEffect, useState } from 'react';
import TrendingItem from '../../atoms/TrendingItem';
import { NavLink } from 'react-router-dom';
import { ButtonWrapper, StyledCol } from '../../atoms/TrendingItem/TrendingItem.styled';
import { Row } from 'antd';
import Button from '../../atoms/Button';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import SmallLoader from '../../atoms/SmallLoader';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { setTrendingProjectsThunk } from '../../../redux/thunks/getAllProjectsThunk';

const TrendingItems = () => {
  const dispatch = useAppDispatch();
  const { trendingProjects } = useAppSelector(state => state.projects);
  const loading = useAppSelector(state => state.loading.isLoading);
  const [trending, setTrending] = useState<any[]>([]);

  useEffect(() => {
    dispatch(setTrendingProjectsThunk());
  }, [dispatch]);

  useEffect(() => {
    setTrending(trendingProjects);
  }, [trendingProjects]);

  return (
    <>
      <Row>
        {loading ? (
          <SmallLoader />
        ) : (
          trending.map((trend, i) => (
            <StyledCol xs={24} md={12} key={i}>
              <NavLink to={`/project/${trend.name?.toLocaleLowerCase()}`}>
                <TrendingItem data={trend} num={i} />
              </NavLink>
            </StyledCol>
          ))
        )}
      </Row>
      <ButtonWrapper>
        <NavLink to={'/projects'}>
          <Button outlined={true}>More trending projects</Button>
        </NavLink>
      </ButtonWrapper>
    </>
  );
};

export default TrendingItems;
