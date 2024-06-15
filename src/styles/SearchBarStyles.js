/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const searchBarStyle = css`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const inputStyle = (theme) => css`
  width: 300px;
  padding: 10px;
  border: none;
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fontSize.medium};
  color: ${theme.colors.textPrimary};
  background-color: ${theme.colors.surface};
  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${theme.colors.accent};
  }
`;

export const buttonStyle = (theme) => css`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.textPrimary};
  border: none;
  border-radius: ${theme.borderRadius.small};
  cursor: pointer;
  font-size: ${theme.fontSize.medium};
  &:hover {
    background-color: ${theme.colors.accent};
  }
`;
