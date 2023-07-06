import styled from 'styled-components';

export const StyledProductCard = styled.li`
  border: 2px solid ${({ theme }) => theme.colors.gray100};
  border-radius: 5px;
  transition: 0.3s;

  :has(button:hover) {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .imageBox {
    background: ${({ theme }) => theme.colors.gray0};

    img {
      width: 100%;
      object-fit: contain;
      height: 150px;
    }
  }

  .content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    padding: 23px 20px;

    .price {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
