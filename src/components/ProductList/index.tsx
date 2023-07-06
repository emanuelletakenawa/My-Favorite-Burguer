import { CartContext } from "../../providers/CartContext";
import ProductCard from "./ProductCard";
import { StyledProductList } from "./style";
import { useContext, useEffect } from "react";

const ProductList = () => {
  const { products, getProducts } = useContext(CartContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <StyledProductList>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
