import './App.css';
import Login from './components/Login/Login'
// import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import CardProvider from './components/store/CartProvider';
import Header from './components/CartComponent/Layout/Header';
import Meals from './components/CartComponent/Meals/Meals';
import Cart from './components/CartComponent/Cart/Cart';

import React, { useState } from 'react';


function App() {
  const [cartisShown, setcartisShown] = useState(false);

  const showCardHandler = () => {
    setcartisShown(true)
  }

  const hideCardHandler = () => {
    setcartisShown(false)
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home/*' element={
          <Dashboard>
            <Routes>
              <Route path="/" element={<Navbar />} />
              {/* <Route path="/home" element={<Navbar />} /> */}
              <Route path="/orders" element={<CardProvider>
                <div className='cart_sec'>
                  {cartisShown && <Cart onClose={hideCardHandler} />}
                    <Header onShowCart={showCardHandler} />
                    <main>
                      <Meals />
                    </main>
                </div> 
              </CardProvider>} />
            </Routes>
        </Dashboard>
        } />
      
      {/* <Dashboard>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/home" element={<Navbar />} />
          <Route path="/orders" element={<CardProvider>
            <div className='cart_sec'>
              {cartisShown && <Cart onClose={hideCardHandler} />}
                <Header onShowCart={showCardHandler} />
                <main>
                  <Meals />
                </main>
            </div> 
          </CardProvider>} />
        </Routes>
        </Dashboard> */}
        </Routes>
    </div>
  );
}

export default App;
