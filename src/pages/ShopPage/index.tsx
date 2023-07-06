import { StyledShopPage } from "./style";
import CartModal from "../../components/CartModal";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";

import { StyledContainer } from "../../styles/grid";
import { useState } from "react";

const ShopPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const updateModal = (value: boolean) => {
    setOpenModal(value);
  };

  return (
    <StyledShopPage>
      {openModal ? <CartModal modal={updateModal} /> : null}
      <Header modal={updateModal} />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
