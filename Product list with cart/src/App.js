import { useState } from 'react';
import './App.css';
import DessertSection from "../src/components/Dessert/DessertSection/DessertSection";
import Cart from './components/Cart/Cart';
import {CartContext} from "../src/Contexts/CartContext";
import ConfirmOrder from './components/Order/ConfirmOrder/ConfirmOrder';

function App() {
  const [cart, setCart] = useState({totalPrice: 0, products:[], productsCount: 0});
  return (
     <section className="hero-section">
      <CartContext.Provider value={{cart ,setCart}}>
        <DessertSection/>
        <Cart/>
      </CartContext.Provider>
     </section>
  );
}

export default App;
