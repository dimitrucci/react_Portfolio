import React from 'react';
import CartProducts from '../../Components/CartProducts/CartProducts';
const ShoppingCart = ({products, removeFromCart, increaseQuantity, decreaseQuantity})=>{
    console.log(products);
    return (
        <div>
            <h3>Shoping cart</h3>
            <CartProducts products={products} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
            {products.length == 0 ? 'no products found Please add some products': null}
        </div>
    );
}
export default ShoppingCart;