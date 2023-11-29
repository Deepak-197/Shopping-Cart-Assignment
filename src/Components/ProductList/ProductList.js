import React, { useState, useEffect } from 'react';
import { MdDeleteForever } from "react-icons/md";
import "./ProductList.css"
import { FaCartShopping } from "react-icons/fa6";

const ProductList = ({ productList, onUpdateQuantity, onApplyDiscount, onRemoveProduct }) => {
  const [discount, setDiscount] = useState(null);

  useEffect(() => {
    onApplyDiscount(discount);
  }, [discount, onApplyDiscount]);

  const handleDiscountChange = (e) => {
    const discountValue = (e.target.value);
    if (!isNaN(discountValue) && discountValue >= 0 && discountValue <= 100) {
      setDiscount(discountValue);
    }
  };

  return (
    <div className='product-list'>
      <h2>Shopping Cart  <FaCartShopping className='icons' fontSize={16} /></h2>

      <div className='cart-list'>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{`$ ${product.price.toFixed(2)}`}</td>
              <td>
                <input
                   className='quantity-input'
                  type="number"
                  min="0"
                  value={product.quantity}
                  onChange={(e) => onUpdateQuantity(product.id, parseInt(e.target.value, 10))}
                />
              </td>
              <td>{`$ ${(product.price * product.quantity).toFixed(2)}`}</td>
              <td>
                <button onClick={() => onRemoveProduct(product.id)}><MdDeleteForever className='icons' fontSize={20} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      

      <div className='price-discount'>
        <h4>Total: {`$ ${productList.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2)}`}</h4>

        
        <div>
        <label htmlFor="discount">Apply Discount (%): </label>
        <input
          type="number"
          id="discount"
          min="0"
          max="100"
          value={discount}
          onChange={handleDiscountChange}
        />
      </div>
        

        <h4>Discounted Total: {`$ ${onApplyDiscount(discount).toFixed(2)}`}</h4>
      </div>
    </div>
  );
};

export default ProductList;