import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  $buttonSize: 'default' | 'medium';
  $buttonStyle: 'green' | 'gray';
}

export const StyledButtonCSS = css<IStyledButtonProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  font-size: 1rem;

  border-radius: 8px;

  transition: 0.4s;

  ${({ $buttonSize }) => {
    switch ($buttonSize) {
      case 'default':
        return css`
          padding: 0 30px;
          height: 60px;
        `;
      case 'medium':
        return css`
          padding: 0 20px;
          height: 40px;
        `;
    }
  }}

  ${({ theme, $buttonStyle }) => {
    switch ($buttonStyle) {
      case 'green':
        return css`
          color: ${theme.colors.white};
          background: ${theme.colors.primary};
          &:hover {
            opacity: 0.5;
          }
        `;
      case 'gray':
        return css`
          color: ${theme.colors.gray300};
          background: ${theme.colors.gray100};
          &:hover {
            color: ${theme.colors.gray100};
            background: ${theme.colors.gray300};
          }
        `;
    }
  }}
`;

export const StyledButton = styled.button<IStyledButtonProps>`
  ${StyledButtonCSS}
`;

export const StyledButtonLink = styled(Link)`
  ${StyledButtonCSS}
`;
