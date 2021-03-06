import React from 'react';
import Link from './link';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { darken } from 'polished';
import theme from '../../config/theme';

const NavLink = styled(Link)({
  color: theme.colors.copy,
  '& + &': { marginLeft: 50 },
  '@media (max-width: 480px)': {
    '& + &': {
      marginLeft: 25,
    },
  },
});

const Header = ({ isHome }) => {
  return (
    <header
      css={css`
        display: flex;
        width: 100%;
        height: 80px;
        background: ${isHome
          ? theme.colors.smoke_black
          : `linear-gradient(0.45turn, ${darken(
              0.2,
              theme.colors.electric_purple
            )}, ${theme.colors.electric_purple})`};
      `}
    >
      <nav
        css={theme.mq({
          width: '60em',
          maxWidth: '80vw',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 auto',
          '& a:hover': {
            color: darken(0.15, theme.colors.copy),
          },
          '#site-logo': {
            fontSize: 36,
          },
        })}
      >
        <NavLink id="site-logo" to="/">
          EG
        </NavLink>
        <div
          css={css`
            display: flex;
          `}
        >
          <NavLink to="/about/">About</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
