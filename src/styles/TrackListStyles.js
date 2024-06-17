/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const trackListStyle = (theme) => css`
  list-style-type: none;
  padding: 0;
  // max-height: 55vh;
  overflow-y: auto; /* Enable vertical scrolling */

  &::-webkit-scrollbar {
    width: ${theme.scrollbar.width};
  }

  &::-webkit-scrollbar-track {
    background: ${theme.scrollbar.trackColor};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.scrollbar.thumbColor};
    border-radius: 10px;
    border: 2px solid ${theme.scrollbar.trackColor};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.scrollbar.thumbHoverColor};
  }
`;
