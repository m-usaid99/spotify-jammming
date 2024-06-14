/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const searchBarContainer = (theme) => css`
    padding: ${theme.spacing.medium};
`;

export const searchButton = (theme) => css`
    padding: ${theme.spacing.small};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    cursor: pointer;

    &:hover {
    background-color: ${theme.colors.secondary};
    }
`;

export const searchInput = (theme) => css`
    padding: ${theme.spacing.small};
    margin-right: ${theme.spacing.small};
`;