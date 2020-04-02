import React from 'react';
import { css } from '@emotion/core';
import theme from '../../config/theme';
import beach from '../images/beach.png';
import lab from '../images/lab.png';
import southAmerica from '../images/south-america.png';
import boat from '../images/boat.png';
import backpack from '../images/backpack.png';
import code from '../images/code.png';
import search from '../images/search.png';

const Icon = ({ img }) => {
  return (
    <img
      src={img}
      css={css`
        width: 55%;
        object-fit: cover;
      `}
    />
  );
};

const xpContent = [
  {
    title: 'In search of next adventure',
    location: 'Portland, OR',
    date: 'Present',
    text: 'Full stack engineer',
    color: 'fffcec',
    background: theme.colors.electric_purple,
    arrowStyle: `7px solid ${theme.colors.electric_purple}`,
    icon: <Icon img={search} />,
  },
  {
    title: 'Software Engineer at Kickstand',
    location: 'Portland, OR',
    date: '2019 - 2020',
    text: 'Full stack engineer',
    color: 'fffcec',
    background: theme.colors.electric_purple,
    arrowStyle: `7px solid ${theme.colors.electric_purple}`,
    icon: <Icon img={code} />,
  },
  {
    title: 'Student at Alchemy Code Lab',
    location: 'Portland, OR',
    date: '2018',
    text: 'student',
    color: 'fffcec',
    background: theme.colors.electric_purple,
    arrowStyle: `7px solid ${theme.colors.electric_purple}`,
    icon: <Icon img={backpack} />,
  },
  {
    title: 'Fisherman',
    location: 'Kodiak, AK',
    date: '2017',
    text: 'Fisherman',
    color: 'fffcec',
    background: theme.colors.electric_purple,
    arrowStyle: `7px solid ${theme.colors.electric_purple}`,
    icon: <Icon img={boat} />,
  },
  {
    title: 'Traveler',
    location: 'South America',
    date: '2016-2017',
    text: 'Full stack engineer',
    color: 'fffcec',
    background: theme.colors.electric_purple,
    arrowStyle: `7px solid ${theme.colors.electric_purple}`,
    icon: <Icon img={southAmerica} />,
  },
  {
    title: 'Lab Technician at ARUP Laboratories',
    location: 'Salt Lake City, UT',
    date: '2010 - 2015',
    text: 'Full stack engineer',
    color: 'fffcec',
    background: theme.colors.electric_purple,
    arrowStyle: `7px solid ${theme.colors.electric_purple}`,
    icon: <Icon img={lab} />,
  },
  {
    title: 'Barista + Surfer',
    location: 'Oahu, HI',
    date: '2009 - 2010',
    text: 'Full stack engineer',
    color: 'fffcec',
    background: theme.colors.electric_purple,
    arrowStyle: `7px solid ${theme.colors.electric_purple}`,
    icon: <Icon img={beach} />,
  },
];

export default xpContent;