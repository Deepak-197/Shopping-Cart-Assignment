import { useState } from "react";
import ProductList from "../ProductList/ProductList";

const productList = [

  {

    id: 1,

    name: 'Product A',

    price: 50, // Price is in INR

    quantity: 1,

  },

  {

    id: 2,

    name: 'Product B',

    price: 30,

    quantity: 1,

  },
  {

    id: 3,

    name: 'Product C',

    price: 50,

    quantity: 1,

  },
  {

    id: 4,

    name: 'Product D',

    price: 70,

    quantity: 1,

  },
  {

    id: 5,

    name: 'Product E',

    price: 40,

    quantity: 1,

  },

  // Add more products as needed

];

const ShoppingCart = () => {
    const [cart, setCart] = useState(productList);
  
    const updateQuantity = (productId, newQuantity) => {
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === productId ? { ...product, quantity: newQuantity } : product
        )
      );
    };
  
    const applyDiscount = (discount) => {
      const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
      const discountedTotal = total - (total * discount) / 100;
      return discountedTotal;
    };
  
    const removeProduct = (productId) => {
      setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };
  
    return (
      <>
          <ProductList
            productList={cart}
            onUpdateQuantity={updateQuantity}
            onApplyDiscount={applyDiscount}
            onRemoveProduct={removeProduct}
          />
      </>
    );
  };
  
  export default ShoppingCart;