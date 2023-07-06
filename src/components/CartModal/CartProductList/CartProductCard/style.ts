import styled from "styled-components";

export const StyledCartProductCard = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  .imageBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: ${({ theme }) => theme.colors.gray100};

    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }

    @media (max-width: 450px) {
      width: 40px;
      height: 40px;

      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  .contentBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    gap: 20px;

    .containerQuantity {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      height: 1rem;
      font-family: ${({ theme }) => theme.fonts.primary};
      button {
        font-size: 1rem;
        font-weight: 800;
        width: 1rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      p {
        font-size: 0.8rem;
        font-weight: 500;
      }
    }

    button {
      background: transparent;
      opacity: 0.4;
      transition: 0.4s;

      :hover {
        opacity: 0.7;
      }
    }
  }
`;
