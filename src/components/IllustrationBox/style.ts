import styled from "styled-components";

export const StyledIllustrationBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;

  img {
    width: 20rem;
  }

  .styledBox {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid #e0e0e0;

    img {
      width: 11rem;
    }
  }
`;
