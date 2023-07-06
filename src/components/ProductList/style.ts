import styled from 'styled-components';

export const StyledProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 50px;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 890px) {
    gap: 30px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    display: flex;
    overflow: auto;

    padding-bottom: 10px;
    padding-right: 10px;
    margin-right: -10px;

    li {
      min-width: 300px;
    }
  }

  @media (max-width: 375px) {
    li {
      min-width: 260px;
    }
  }
`;
