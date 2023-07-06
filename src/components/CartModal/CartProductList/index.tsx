import CartProductCard from "./CartProductCard";

import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";

import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";

const CartProductList = () => {
  const { cart, removeAllFromCart, updateCartItemQuantity } =
    useContext(CartContext);

  let cartTotalValue = () => {
    let totalValue = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    return totalValue.toFixed(2);
  };

  return (
    <StyledCartProductList>
      <ul>
        {cart?.map((product) => (
          <CartProductCard
            key={product.id}
            product={product}
            onUpdateQuantity={updateCartItemQuantity}
          />
        ))}
      </ul>

      <div className="totalBox">
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className="total">
          R$ {cartTotalValue()}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize="default"
        $buttonStyle="gray"
        onClick={removeAllFromCart}
      >
        Finalizar pedido
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
