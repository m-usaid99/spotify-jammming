/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const appStyle = (theme) => css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: ${theme.spacing.large};
    font-family: Arial, sans-serif;
`;  

export const appBodyStyle = (theme) => css`
    display: flex;
    flex: 1;
`;

export const overlayStyle = (theme) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const loginBoxStyle = (theme) => css`
  background-color: white;
  padding: ${theme.spacing.large};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`;