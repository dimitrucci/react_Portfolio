import React,{useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Pages/HomePage/HomePage';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import './App.css';


const productsSeed = [
  {
    id: 1,
    title: "Hello World",
    seller: "Walmart",
    description:
      "Welcome to your first post! To create posts create a title and body. Don't forget to include your screen name!",
    thumbnail: "https://placekitten.com/200/300",
    post_date: new Date(Date.now())
  },
  {
    id: 2,
    title: "The Second Post",
    seller: "Amazon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "https://placekitten.com/200/300",
    post_date: new Date(Date.now())
  },
  {
    id :3,
    title: "Another One",
    seller: "Alec",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    thumbnail: "https://placekitten.com/200/300",
    post_date: new Date(Date.now())
  }
];

function App() {
  const [loading, setLoading] = useState(true);
  const [filter , setFilter]  = useState(false);
  const [topProducts, setTopProducs] = useState([]);
  const [filtredTopProducts, setFiltredTopProducts] = useState(null);
  const [productsCart, setProductsCart] = useState([]);
  const handleSearch = (query) => {
    if(!query){
      setFilter(false);
    }
    else{
      setFilter(true);
      const searchResults = topProducts.filter(el => el.title.toLowerCase().includes(query.toLowerCase()));
      setFiltredTopProducts(searchResults);
    }
  }
  const getAllProducts = () => {
    //1j7iapqW9cMtP87GqDaxc2Um
    fetch('http://localhost:3001/api/products',{
        longDescription : "some description",
    })
    .then((response) => {
        //return JSON.parse(response);
        return productsSeed;
    })
    .then((products) => {
      setTimeout(() =>{
        setTopProducs(products);
        setLoading(false);

      } ,2000);
        
    });
    
}
const handleAddToCart = (product) => {
  console.log('add to cart',product);
  if(!productsCart.find(el => el.id === product.id)){
    productsCart.push({...product, quantity : 1});
    setProductsCart([...productsCart]);
  }

}
const handleRemoveFromCart = (product) => {
  const updateProductCart = productsCart.filter(el => el.id !== product.id);
  setProductsCart([...updateProductCart]);  
}
const hanldeIncreaseQuantity  = (product) => {
  const productToUodate = productsCart.find(el => el.id === product.id)
  if(productToUodate) productToUodate.quantity++;
  setProductsCart([...productsCart]);  
}
const handleDecreaseQuantity = (product) => {
  const productToUodate = productsCart.find(el => el.id === product.id)
  if(productToUodate) productToUodate.quantity--;
  if(productToUodate.quantity <= 0) handleRemoveFromCart(product);
  else  setProductsCart([...productsCart]);  
}

useEffect(()=>{
getAllProducts();
},[topProducts]);

const products =  filter ? filtredTopProducts : topProducts;
  return (
<Router>
  <Navigation productQuantity={productsCart.length} />
  <Switch>
    <Route exact path="/">
      <HomePage products={products} loading={loading} search={handleSearch} addToCart={handleAddToCart} />
    </Route>
    <Route exact path="/cart">
      <ShoppingCart products={productsCart}  removeFromCart={handleRemoveFromCart} increaseQuantity={hanldeIncreaseQuantity} decreaseQuantity={handleDecreaseQuantity} />
    </Route>
  </Switch>
</Router>
);
}

export default App;