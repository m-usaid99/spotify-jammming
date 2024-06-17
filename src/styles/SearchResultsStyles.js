/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const searchResultsStyle = (theme) => css`
  flex: 1;
  padding: ${theme.spacing.medium};
  overflow-y: auto; /* Enable vertical scrolling */
  max-height: 50vh; /* Limit the height */

  @media (max-width: 768px) {
    max-height: 40vh; /* Adjust height for mobile */

    h2 {
      text-align: center;
    }
  }
`;
