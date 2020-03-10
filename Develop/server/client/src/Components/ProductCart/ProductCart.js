import React from 'react';
import './ProductCart.css';

const ProductCart = ({product, decreaseQuantity, increaseQuantity, removeFromCart})=>{
    console.log(product);
    const formatDate = (date) =>{
        const d = new Date(date);
        return `${d.getDate() < 10 ? '0'+d.getDate():d.getDate()}/${d.getMonth() < 9 ? '0'+(d.getMonth()+1):(d.getMonth()+1)}`;
    }
    
    return (
        <div className="product">
            <img src={product.thumbnail}/>
            <div className="infos">
            <h3 className="title">{product.title}</h3>
            <p className="seller">Seller : {product.seller}</p>
            <p className="description">{product.description}</p>
            <p className="posted-on">Posted on {formatDate(product.post_date)}</p>
            </div>
            <div className="controls">
                <p>Quantity : {product.quantity || '0'}</p>
                <button onClick={() => increaseQuantity(product)}>+</button>
                <button onClick={() => decreaseQuantity(product)}>-</button>                
                <button onClick={() => removeFromCart(product)}>delete</button>
            </div>
        </div>
    );
}
export default ProductCart;