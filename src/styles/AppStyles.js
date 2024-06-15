/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const appStyle = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing.large};
  background-color: ${theme.colors.background};
  color: ${theme.colors.textPrimary};
  font-family: 'Overpass', sans-serif; /* Body font */
`;

export const headerStyle = (theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.large};
  width: 100%;
  max-width: 1200px;
  h1 {
    font-size: 48px;
    color: ${theme.colors.primary};
    font-family: 'Sansita', sans-serif; /* Heading font */
    font-weight: 900;
  }
`;

export const appBodyStyle = (theme) => css`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing.large};
  width: 100%;
  max-width: 1200px;
`;

export const overlayStyle = (theme) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const loginBoxStyle = (theme) => css`
  background-color: ${theme.colors.surface};
  padding: ${theme.spacing.large};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: ${theme.colors.textPrimary};
`;

export const loadingBoxStyle = (theme) => css`
  background-color: ${theme.colors.surface};
  padding: ${theme.spacing.large};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: ${theme.colors.textPrimary};
`;
