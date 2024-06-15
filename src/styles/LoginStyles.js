/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const loginBoxContentStyle = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.textPrimary};
  font-family: 'Overpass', sans-serif; /* Body font */
`;

export const loginButtonStyle = (theme) => css`
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.textPrimary}; /* Light color for contrast */
  border: none;
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  margin-top: ${theme.spacing.medium};
  font-family: 'Overpass', sans-serif; /* Ensure the button text uses Overpass */
  font-size: ${theme.fontSize.medium};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.accent};
  }
`;

export const logoutButtonStyle = (theme) => css`
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.textPrimary}; /* Light color for contrast */
  border: none;
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  font-family: 'Overpass', sans-serif; /* Ensure the button text uses Overpass */
  font-size: ${theme.fontSize.medium};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.accent};
  }
`;
