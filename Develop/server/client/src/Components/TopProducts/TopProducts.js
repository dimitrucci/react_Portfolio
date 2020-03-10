import React from 'react';
import Product from '../Product/Product';

const TopProducts = ({products, addToCart})=>{
    return (
        <div>
            {products.map((product) => <Product key={product.id} product={product} addToCart={addToCart} />)}
        </div>
    );
}
export default TopProducts;