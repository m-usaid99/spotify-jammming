/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const loginBoxContentStyle = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.textPrimary};
`;

export const loginButtonStyle = (theme) => css`
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  background-color: ${theme.colors.accent};
  color: ${theme.colors.textPrimary};
  border: none;
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  margin-top: ${theme.spacing.medium};

  &:hover {
    background-color: ${theme.colors.primary};
  }
`;

export const logoutButtonStyle = (theme) => css`
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  background-color: ${theme.colors.accent};
  color: ${theme.colors.textPrimary};
  border: none;
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.primary};
  }
`;
