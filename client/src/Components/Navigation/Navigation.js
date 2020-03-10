import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = ({productQuantity}) =>{

return (
    <div className="navigation">
      <div className="link-item">
        <Link to="/">Home</Link>
      </div>
      <div className="link-item">
        <Link to="/cart">Cart {`${productQuantity > 0  ? '( '+(productQuantity)+' )' : ''}`}</Link>
      </div>
      <hr />
  </div>);
}

export default Navigation;