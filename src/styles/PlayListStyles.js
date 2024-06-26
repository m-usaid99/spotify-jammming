/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const playlistStyle = (theme) => css`
  flex: 1;
  padding: ${theme.spacing.medium};
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.textPrimary};
  overflow-y: auto; /* Enable vertical scrolling */
  max-height: 55vh; /* Limit the height */

  @media (min-width: 1024px) { /* Apply custom scrollbar styles only on desktop */
    &::-webkit-scrollbar {
      width: var(--scrollbar-width);
    }

    &::-webkit-scrollbar-track {
      background: var(--scrollbar-track-color);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-thumb-color);
      border-radius: 10px;
      border: 2px solid var(--scrollbar-track-color);
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: var(--scrollbar-thumb-hover-color);
    }
  }

  @media (max-width: 768px) {
    max-height: 40vh; /* Adjust height for mobile */
    width: 85%;
  }
`;

export const saveButton = (theme) => css`
  margin-top: ${theme.spacing.small};
  padding: ${theme.spacing.small};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.textPrimary}; /* Light color for contrast */
  border: none;
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  font-size: ${theme.fontSize.medium};
  font-family: 'Overpass', sans-serif; /* Ensure the button text uses Overpass */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.accent};
  }
`;

export const playlistNameInput = (theme) => css`
  width: 100%;
  padding: ${theme.spacing.small};
  font-size: ${theme.fontSize.medium};
  font-weight: bold;
  font-family: Overpass;
  border: none;
  border-bottom: 1px solid ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.medium};
  background-color: transparent;
  color: ${theme.colors.textPrimary};
  text-align: center;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${theme.colors.secondary};
  }
`;

export const playlistNameContainer = (theme) => css`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.medium};
`;

export const clearButton = (theme) => css`
  background: none;
  border: none;
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSize.medium};
  cursor: pointer;
  margin-left: ${theme.spacing.small};

  &:hover {
    color: ${theme.colors.accent};
  }
`;
