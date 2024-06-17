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
  border: 1px solid ${theme.colors.secondary};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fontSize.medium};
  color: ${theme.colors.textPrimary};
  background-color: ${theme.colors.surface};
  font-family: 'Overpass', sans-serif; /* Body font */
  transition: box-shadow 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${theme.colors.accent};
  }
`;

