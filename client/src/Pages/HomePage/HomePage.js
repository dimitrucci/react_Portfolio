import React from 'react';
import TopProducts from '../../Components/TopProducts/TopProducts';
import Search from '../../Components/Search/Search';

  
const HomePage = ({products = [], loading, addToCart, search } )=>{


    return (
        <React.Fragment>
        {!loading ? 
            <div className="home-page">
            <Search  search={search} />
            <TopProducts products={products} addToCart={addToCart}/>  
            </div>:
            <p>Loading ...</p>}
        </React.Fragment>
    )
        
        
        
        
}
export default HomePage;