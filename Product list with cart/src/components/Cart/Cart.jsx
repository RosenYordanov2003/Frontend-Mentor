import { useContext, useState } from 'react';
import {CartContext} from "../../Contexts/CartContext";
import ConfirmOrder from "../Order/ConfirmOrder/ConfirmOrder";
import svg from "../../images/illustration-empty-cart.svg"
import deliverySvg from "../../images/icon-carbon-neutral.svg";
import CartItem from "./CartItem/CartItem";
import "./Cart.css";
import "./CartResponsive.css";

export default function Cart() {
    const{cart} = useContext(CartContext);
    const[confirmOrder, setConfirmOrder] = useState(false);
    const cartProducts = cart.products.map((p, i) => <CartItem key={i} cartItem={p}/>);

    function handleCloseConfirmOrder() {
      setConfirmOrder(false);
    }

    return (
      <>
      {confirmOrder && <ConfirmOrder handleCloseConfirmOrder={handleCloseConfirmOrder}/>}
      <section className="cart">
        <h2 className="cart-title">Your Cart({cart.productsCount})</h2>
        {
          cart.productsCount == 0 ?
          <div className="empty-cart">
            <img src={svg}></img>
            <p className="items-text">Your added items will be appear here</p>
        </div>
        :
        <>
          <div className="cart-products">
            {cartProducts}
          </div>
        <div className="order-container">
            <p className="total-order">Order Total</p>
           <p className="total-order-price">${Number(cart.totalPrice).toFixed(2)}</p>
         </div>
         <div className="delivery">
            <img src={deliverySvg}></img>
            <p>This is a <span>carbon-neutral</span> delivery</p>
         </div>
         <button onClick={() => setConfirmOrder(true)} className="confirm-order">Confirm Order</button>
        </>
        }          
      </section>
      </>
      
    )
}