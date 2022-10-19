import React, { useEffect, useState } from 'react';
import useMobile from '../../../hooks/Mobile';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';

import { PageDescription, PageTitle, StyledSearch } from './ProjectsPage.styled';
import { Section } from '../../../styles/global';
import Button from '../../atoms/Button';
import { StyledCol } from '../../atoms/TrendingItem/TrendingItem.styled';
import { NavLink, useNavigate } from 'react-router-dom';
import TrendingItem from '../../atoms/TrendingItem';

import { Row } from 'antd';
import Tab from '../../atoms/Tab';
import TabPanel from '../../molecules/TabPanel';
import { CloseCircleFilled } from '@ant-design/icons/lib';
import Loader from '../../atoms/Loader';
import {
  setAllProjectsThunk,
  setTrendingProjectsThunk,
} from '../../../redux/thunks/getAllProjectsThunk';

const ProjectsPage = () => {
  const isMobile = useMobile();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { allProjects, trendingProjects } = useAppSelector(state => state.projects);
  const loading = useAppSelector(state => state.loading.isLoading);
  const [activeTab, setActiveTab] = useState('1');
  const [all, setAll] = useState<any[]>([]);
  const [trending, setTrending] = useState<any[]>([]);

  useEffect(() => {
    dispatch(setAllProjectsThunk());
    dispatch(setTrendingProjectsThunk());
  }, [dispatch]);

  useEffect(() => {
    setAll(allProjects);
    setTrending(trendingProjects);
  }, [allProjects, trendingProjects]);

  useEffect(() => {
    if (localStorage.getItem('tab') === '2') {
      setActiveTab('2');
    }
    return () => localStorage.removeItem('tab');
  }, []);

  const onSearch = (value: any) => {
    if (activeTab === '1' && value.length) {
      return setTrending((prevState: any) =>
        prevState.filter((item: any) => item.name.toLowerCase().includes(value.toLowerCase())),
      );
    }
    if (activeTab === '2' && value.length) {
      return setAll((prevState: any) =>
        prevState.filter((item: any) => item.name.toLowerCase().includes(value.toLowerCase())),
      );
    }
    if (!value.length) {
      resetFilter();
    }
  };
  const resetFilter = () => {
    if (activeTab === '1') {
      return setTrending(trendingProjects);
    }
    if (activeTab === '2') {
      return setAll(allProjects);
    }
  };

  const callback = (key: any) => {
    setActiveTab(key);
  };

  const goToCreateHandler = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('create')?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ marginTop: `${isMobile ? '54px' : ''}`, padding: '20px 0' }}>
      <Section maxWidth={1080}>
        <Row align="middle" justify="space-between">
          <PageTitle>Projects on Zigurat</PageTitle>
          <Button size={'large'} onClick={goToCreateHandler}>
            Create project
          </Button>
        </Row>
        <Row>
          <PageDescription>
            <span>
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="info-circle"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" />
              </svg>
            </span>
            <span>
              {' '}
              The Juicebox protocol is open to anyone, and project configurations can vary widely.
              There are risks associated with interacting with all projects on the protocol.
              Projects built on the protocol are not endorsed or vetted by JuiceboxDAO or Peel. Do
              your own research and understand the risks before committing your funds.
            </span>
          </PageDescription>
        </Row>
        <StyledSearch
          addonBefore="@"
          placeholder="Search projects by handle"
          allowClear={{ clearIcon: <CloseCircleFilled onClick={resetFilter} /> }}
          onChange={e => onSearch(e.target.value)}
          onSearch={onSearch}
          style={{ width: '100%' }}
        />
        <TabPanel defaultActiveKey={activeTab} activeKey={activeTab} onChange={callback}>
          <Tab tab="Trending" key="1">
            <Row>
              {trending.map((trend: any, i: number) => (
                <StyledCol xs={24} md={12} key={i}>
                  <NavLink to={`/project/${trend.name?.toLocaleLowerCase()}`}>
                    <TrendingItem data={trend} num={i} />
                  </NavLink>
                </StyledCol>
              ))}
            </Row>
          </Tab>
          <Tab tab="All" key="2">
            <Row>
              {all.map((trend: any, i: number) => (
                <StyledCol xs={24} md={12} key={i}>
                  <NavLink to={`/project/${trend.name?.toLocaleLowerCase()}`}>
                    <TrendingItem data={trend} num={i} />
                  </NavLink>
                </StyledCol>
              ))}
            </Row>
          </Tab>
        </TabPanel>
      </Section>
    </div>
  );
};

export default ProjectsPage;
