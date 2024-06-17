/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const trackContainer = (theme) => css`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.small};
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.small};
  margin-bottom: ${theme.spacing.small};
  color: ${theme.colors.textPrimary};

  @media (max-width: 600px) {
    flex-direction: column; /* Stack elements vertically on small screens */
    align-items: center;
  }
`;

export const albumArtStyle = (theme) => css`
  width: 50px;
  height: 50px;
  margin-right: ${theme.spacing.medium};
  border-radius: ${theme.borderRadius.small};
  padding: ${theme.spacing.small};
`;

export const trackDetails = (theme) => css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center; /* Center the text vertically */

  @media (max-width: 600px) {
    align-items: center; /* Center text on small screens */
    text-align: center;
    margin-right: 0;
    margin-bottom: ${theme.spacing.medium}; /* Add margin below for spacing */
  }
`;

export const trackName = (theme) => css`
  font-size: ${theme.fontSize.medium};
  color: ${theme.colors.textPrimary};
`;

export const trackArtist = (theme) => css`
  font-size: ${theme.fontSize.small};
  color: ${theme.colors.textSecondary};
  margin-right: ${theme.spacing.large}; /* Add spacing between artist and album */
`;

export const trackAlbum = (theme) => css`
  font-size: ${theme.fontSize.small};
  color: ${theme.colors.textSecondary};
  font-style: italic; /* Make album name italic */
  margin-right: auto; /* Ensure there's space between album name and button */
`;

export const buttonContainer = (theme) => css`
  display: flex;
  justify-content: center;
`;

export const buttonStyle = (theme) => css`
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.textPrimary};
  border: none;
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  font-size: ${theme.fontSize.small};
  font-family: 'Overpass', sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.accent};
  }

  @media (max-width: 600px) {
  font-size: ${theme.fontSize.small}; /* Ensure font size is small on mobile */
  }
`;

export const audioStyle = (theme) => css`
  display: none; /* Hide the audio element */
`;
