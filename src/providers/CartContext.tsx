import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const CartContext = createContext({} as ICartContext);

interface ICartProviderProps {
  children: React.ReactNode;
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantity: number;
}

interface ICartContext {
  getProducts: () => Promise<void>;
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  addToCart: (product: IProduct) => void;
  cart: IProduct[];
  removeAllFromCart: () => void;
  filterProducts: (search: string) => void;
  removeFromCart: (id: number) => void;
  updateCartItemQuantity: (id: number, quantity: number) => void;
}

const CartProvider = ({ children }: ICartProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getProducts = async () => {
    try {
      const response = await api.get("products");
      setProducts(response.data);
    } catch (error) {
      const currentError = error as AxiosError<string>;
      toast.error(currentError.response?.data);
    }
  };

  const addToCart = (product: IProduct) => {
    let item = cart.find((productFound) => productFound.id == product.id);
    if (item) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success(`${product.name} foi adicionado ao carrinho`);
  };

  const removeFromCart = (id: number) => {
    let itemId = cart.findIndex((product) => product.id == id);
    if (itemId > -1) {
      const newCart = [...cart];
      newCart.splice(itemId, 1);
      setCart(newCart);
      toast.success("Produto removido com sucesso!");
    } else {
      toast.error("Ops! Produto não encontrado");
    }
  };

  const removeAllFromCart = () => {
    if (cart.length > 0) {
      setCart([]);
      toast.success("Seu pedido está em andamento!");
    }
  };

  const filterProducts = (search: string) => {
    let filteredProductsAux = products.filter(
      (product) =>
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.name.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredProductsAux.length > 0) {
      setProducts(filteredProductsAux);
    }
  };

  const updateCartItemQuantity = (id: number, quantity: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: quantity,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        getProducts,
        cart,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        filterProducts,
        updateCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
