
import React from 'react';
import Layouts from './components/Layouts';
import ReactDOM from 'react-dom/client';
import {Layout} from 'antd';
import { BrowserRouter,Routes,
  Route } from "react-router-dom";
import Product from './pages/Product';
import ProductList from './pages/ListOfProducts';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import PageNotFound from './pages/Page404';
import Home from './pages/Account';
import UserProfile from './pages/UserProfile';

const {Footer} = Layout;


function App() {
 
  return (
   <>
   <BrowserRouter>
    
    <Layout>
    <Layouts/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="product" element={<Product/>} />
      <Route path="product-list" element={<ProductList/>} />
      <Route path="product-list/:id" element={<ProductDetails/>} /> 
      <Route path="cart" element={<Cart/>} />   
      <Route path="*" element={<PageNotFound />} /> 
      <Route path="profile" element={<UserProfile/>} />  
    </Routes>
    
    </Layout>
    
    
  </BrowserRouter>   
   </>
  );

}

export default App;
