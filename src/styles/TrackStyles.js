/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const trackContainer = (theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.small};
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.small};
  margin-bottom: ${theme.spacing.small};
  color: ${theme.colors.textPrimary};
`;

export const trackDetails = (theme) => css`
  display: flex;
  flex-direction: column;
`;

export const trackName = (theme) => css`
  font-size: ${theme.fontSize.medium};
  color: ${theme.colors.textPrimary};
`;

export const trackArtist = (theme) => css`
  font-size: ${theme.fontSize.small};
  color: ${theme.colors.textSecondary};
`;

export const trackAlbum = (theme) => css`
  font-size: ${theme.fontSize.small};
  color: ${theme.colors.textSecondary};
`;

export const buttonStyle = (theme) => css`
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.textPrimary}; /* Light color for contrast */
  border: none;
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  font-size: ${theme.fontSize.small};
  font-family: 'Overpass', sans-serif; /* Ensure the button text uses Overpass */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.accent};
  }
`;
