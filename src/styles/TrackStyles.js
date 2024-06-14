/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const trackContainer = (theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.small} 0;
  border-bottom: 1px solid ${theme.colors.gray};
`;

export const trackDetails = (theme) => css`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: ${theme.spacing.small};
`;

export const trackName = (theme) => css`
  font-size: ${theme.fontSize.medium};
  font-weight: bold;
  margin-bottom: ${theme.spacing.small};
`;

export const trackArtist = (theme) => css`
  font-size: ${theme.fontSize.small};
  color: ${theme.colors.gray};
`;

export const trackAlbum = (theme) => css`
  font-size: ${theme.fontSize.small};
  font-style: italic;
  color: ${theme.colors.gray};
  text-align: center;
  flex: 1;
`;

export const buttonStyle = (theme) => css`
  padding: ${theme.spacing.small};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;