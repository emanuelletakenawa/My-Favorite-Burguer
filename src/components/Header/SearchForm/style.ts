import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  width: 100%;
  max-width: 280px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  padding: 8px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray100};
  transition: 0.4s;

  background: ${({ theme }) => theme.colors.white};

  input {
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.primary};
    height: 40px;
  }

  input:focus {
    outline: none;
  }

  :has(input:focus) {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
