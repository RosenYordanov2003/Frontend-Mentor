import {useContext} from "react";
import  "../CartItem/CartItem.css";
import removeSvg from "../../../images/icon-remove-item.svg"
import { CartContext } from "../../../Contexts/CartContext";

export default function CartItem({cartItem}){
  const {cart, setCart} = useContext(CartContext);

  function handleRemoveItem() {
     setCart({
       productsCount : cart.productsCount - cartItem.count,
       products: cart.products.filter(p => p.name != cartItem.name),
       totalPrice : cart.totalPrice - Number(cartItem.totalPrice)
     });
  }
  return(
    <>
     <article className="cart-item">
        <div className="product-row">
         <p className="product-name">{cartItem.name}</p>
            <div className="about-item">
                <p className="product-quantity">{cartItem.count}x</p>
                <p className="cart-product-price">${Number(cartItem.price).toFixed(2)}</p>
                <p className="product-total-price">${Number(cartItem.totalPrice).toFixed(2)}</p>
            </div>
        </div>
        <div onClick={handleRemoveItem} className="remove-product-container">
                <img className="remove-product-img" src={removeSvg}></img>
        </div>
    </article>
    <hr className="separator"/>
    </>
  )
}
