import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  height: 3.75rem;
  position: relative;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 0.5rem;

  font-family: ${({ theme }) => theme.fonts.primary};

  input {
    border-radius: 0.5rem;
    height: 100%;
    width: 100%;
    font-size: 1rem;
    padding: 0.9375rem;
    color: ${({ theme }) => theme.colors.gray600};
  }

  label {
    background-color: ${({ theme }) => theme.colors.white};
    height: 100%;
    position: absolute;
    top: 0px;
    left: 12px;

    display: flex;
    align-items: center;

    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray600};
    transition: top 0.5s, left 0.3s ease-out;
  }

  input:is(:focus, :not(:placeholder-shown)) + label {
    top: -10px;
    left: 12px;

    height: fit-content;
    width: fit-content;

    padding: 0.1875rem 0.625rem;
    border-radius: 14px;

    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
  }
`;
