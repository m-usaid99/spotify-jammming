/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const appStyle = (theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing.large};
  background-color: ${theme.colors.background};
  color: ${theme.colors.textPrimary};
  font-family: 'Overpass', sans-serif;

  @media (max-width: 768px) {
    padding: ${theme.spacing.medium};
  }

  @media (max-width: 480px) {
    padding: ${theme.spacing.small};
  }
`;

export const headerStyle = (theme) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 25px;
  margin-bottom: ${theme.spacing.large};

  h1 {
    font-size: 36px;
    color: ${theme.colors.primary};
    font-family: 'Sansita', sans-serif;
    font-weight: 900;
    margin: 0;
  }

  button {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.textPrimary}; /* Updated to use textPrimary */
    border: none;
    border-radius: ${theme.borderRadius.small};
    cursor: pointer;
    font-size: ${theme.fontSize.small}; /* Adjusted size */
    font-family: 'Overpass', sans-serif;
    padding: ${theme.spacing.small} ${theme.spacing.medium}; /* Adjusted padding */
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${theme.colors.accent};
    }
  }

  @media (max-width: 768px) {
    width: 90%; 
  
    h1 {
      font-size: 28px; /* Adjusted size */
    }

    button {
      font-size: ${theme.fontSize.small}; /* Ensure button text size adjusts */
    }
  }
`;

export const appBodyStyle = (theme) => css`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing.large};
  width: 100%;
  max-width: 1200px;
  padding-top: ${theme.spacing.large};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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

  @media (max-width: 480px) {
    padding: ${theme.spacing.medium};
  }
`;

export const loadingBoxStyle = (theme) => css`
  background-color: ${theme.colors.surface};
  padding: ${theme.spacing.large};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: ${theme.colors.textPrimary};
`;

export const logoutButtonStyle = (theme) => css`
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
`;
