import { MdDelete } from "react-icons/md";

import { StyledCartProductCard } from "./style";
import { StyledTitle } from "../../../../styles/typography";

import { IProduct } from "../../../../providers/CartContext";

import { useContext } from "react";
import { CartContext } from "../../../../providers/CartContext";

interface ICartProductCardProps {
  product: IProduct;
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

const CartProductCard = ({
  product,
  onUpdateQuantity,
}: ICartProductCardProps) => {
  const { removeFromCart, addToCart } = useContext(CartContext);

  const handleIncrement = () => {
    onUpdateQuantity(product.id, product.quantity + 1);
    addToCart(product);
  };

  const handleDecrement = () => {
    if (product.quantity > 1) {
      onUpdateQuantity(product.id, product.quantity - 1);
    } else if (product.quantity == 1) {
      removeFromCart(product.id);
    }
  };

  return (
    <StyledCartProductCard>
      <div className="imageBox">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="contentBox">
        <StyledTitle tag="h3" $fontSize="three">
          {product.name}
        </StyledTitle>
        <div className="containerQuantity">
          <button onClick={handleIncrement}>+</button>
          <p>{product.quantity}</p>
          <button onClick={handleDecrement}>-</button>
        </div>
        <button type="button" aria-label="Remover" onClick={handleDecrement}>
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
