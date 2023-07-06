import styled from 'styled-components';

export const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .flexGrid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    .left,
    .right {
      width: 100%;
    }

    .formBox {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 20px;

      form,
      button,
      a {
        width: 100%;
      }

      p {
        max-width: 280px;
      }
    }

    @media (max-width: 750px) {
      flex-direction: column-reverse;
      .ballsImage {
        display: none;
      }
    }
  }
`;
