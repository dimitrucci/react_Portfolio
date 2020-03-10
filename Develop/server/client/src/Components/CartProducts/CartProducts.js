import React from 'react';
import ProductCart from '../ProductCart/ProductCart';

const CartProducts = ({products, removeFromCart, increaseQuantity, decreaseQuantity})=>{
    return (
        <div>
            {products.map((product) => <ProductCart key={product.id} product={product} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} removeFromCart={removeFromCart} />)}
        </div>
    );
}
export default CartProducts;