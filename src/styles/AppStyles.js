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