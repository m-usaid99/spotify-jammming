/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const playlistStyle = (theme) => css`
  flex: 1;
  padding: ${theme.spacing.medium};
`;

export const saveButton = (theme) => css`
  margin-top: ${theme.spacing.small};
  padding: ${theme.spacing.small};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const playlistNameInput = (theme) => css`
  width: 100%;
  padding: ${theme.spacing.small};
  font-size: ${theme.fontSize.large};
  font-weight: bold;
  border: none;
  border-bottom: 1px solid ${theme.colors.gray};
  margin-bottom: ${theme.spacing.medium};
  background-color: transparent;
  color: ${theme.colors.primary};
  text-align: center;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${theme.colors.secondary};
  }
`;