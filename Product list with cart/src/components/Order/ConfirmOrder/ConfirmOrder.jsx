import { useContext, useState } from "react";
import {CartContext} from "../../../Contexts/CartContext";
import OrderItem from "../OrderItem/OrderItem";
import checkMarkSvg from "../../../images/icon-order-confirmed.svg";
import "./ConfirmOrder.css";
import "./ConfirmOrderResponsive.css";


export default function ConfirmOrder({handleCloseConfirmOrder}){
   const[isClosed, setIsClosed] = useState(false);

   function handleOnResetCart() {
      setCart({
         products: [],
         totalPrice: 0,
         productsCount: 0
      });
      setIsClosed(true);

      setTimeout(() => {
        handleCloseConfirmOrder();
      }, 700)
   }
    const {cart, setCart} = useContext(CartContext);
    const orderItems = cart.products.map((item, index) => <OrderItem item={item} key={index}/>);
    return(
        <article className={`order ${isClosed ? "closed-order" : ""}`}>
         <div className="checkmark-container">
            <img className="checkmark" src={checkMarkSvg}></img>
         </div>
         <h1 className="order-title">Order Confirmed</h1>
         <p className="order-sub-title">We hope you enjoy your food</p>
         <div className="confirm-order-container">
            {orderItems}
         </div>
         <div className="order-total">
            <p>Order Total</p>
            <p className="order-total-price">${Number(cart.totalPrice).toFixed(2)}</p>
         </div>
         <button onClick={handleOnResetCart} className="confirm-order start-new-order">Start New Order</button>
        </article>
    )
}