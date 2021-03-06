import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { darken } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import theme from '../../config/theme';
import Link from './link';

const SocialLink = styled(Link)({
  color: theme.colors.electric_purple,
  fontSize: 40,
  '& + &': { marginLeft: 50 },
  '@media (max-width: 480px)': {
    '& + &': {
      marginLeft: 25,
    },
  },
  '&:hover': {
    color: darken(0.05, theme.colors.electric_purple),
  },
});

const Footer = () => (
  <footer
    css={css`
      width: 100%;
      height: 200px;
      background: linear-gradient(
        ${theme.brand.primary},
        40%,
        ${theme.brand.primary}
      );
    `}
  >
    <div
      css={css`
        width: 65em;
        height: 100%;
        max-width: 90vw;
        margin: 0 auto;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.electric_purple};
      `}
    >
      <div>
        <SocialLink to="https://www.linkedin.com/in/easton-gorishek/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </SocialLink>
        <SocialLink to="https://github.com/easton-gorishek">
          <FontAwesomeIcon icon={faGithub} />
        </SocialLink>
        <SocialLink to="https://twitter.com/eastongorishek">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialLink>
      </div>
    </div>
  </footer>
);

export default Footer;
