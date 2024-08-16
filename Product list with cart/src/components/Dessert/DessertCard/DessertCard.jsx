import { useContext, useEffect, useState } from 'react';
import {CartContext} from "../../../Contexts/CartContext";
import "./DessertCard.css";
import "./DessertCardResponsive.css";
import cartSvg from "../../../images/icon-add-to-cart.svg";
import decrementSvg from "../../../images/icon-decrement-quantity.svg"
import incrementSvg from "../../../images/icon-increment-quantity.svg"

// product object properties: name, count, price, totalPrice by products 
export default function DessertCard({name, price, imgName, category}) {
    const[count, setCount] = useState(0);
    const {cart, setCart} = useContext(CartContext);
    useEffect(() => {
       const isActive = cart.products.find(p => p.name == name) !== undefined ? true : false;
       if(!isActive){
        setCount(0);
       }
    }, [cart.products.length])
   
    
    function increment() {
        let currentProducts = cart.products;
        let isFind = false;
        for (const product of currentProducts) {
            if(product.name == name){
                product.count++;
                product.totalPrice = product.count * product.price;
                isFind = true;
                break;
            }
        }
        if(!isFind){
            currentProducts.push({name, price: Number(price), totalPrice: Number(price), count: 1, imgName});
        }
        setCart({
            productsCount: cart.productsCount + 1,
            products: currentProducts,
            totalPrice: cart.totalPrice + price
        });
        setCount(count + 1);
    }
    function decrement() {
        let currentProducts = cart.products;
        let index = -1;
        currentProducts.forEach((product, i) => {
            if(product.name == name){
                product.count--;
                if(product.count == 0){
                   index = i;      
                   product.totalPrice = 0;
                }
                product.totalPrice -= product.price;
            }
        })
        if(index > - 1){
            currentProducts.splice(index, 1);
        }
        setCart({
            productsCount: cart.productsCount - 1,
            products: currentProducts,
            totalPrice: cart.totalPrice - price
        });
        setCount(count - 1);
    }
    
    return(
        <article className="dessert-card">
           <div className="img-container">
              <img className="product-img" src={require(`../../../images/${imgName}`)}></img>
              {count == 0 ?
               <div onClick={increment} className="button-container">
                <img className="cart-icon" src={cartSvg}></img>
                <button className="add-to-cart">Add to Cart</button>
               </div>
               :
               <div className="button-container modify-quantity-container">
                <div onClick={decrement} className="modify-button-container">
                 <img className="decrement-icon" src={decrementSvg}></img>
                </div>
                 <p className="product-count">{count}</p>
                 <div onClick={increment} className="modify-button-container">
                  <img className="increment-icon" src={incrementSvg}></img>
                </div>
                </div>
              }
           </div>
           <p className="product-category">{category}</p>
           <p className="product-name">{name}</p>
           <p className="product-price">${Number(price).toFixed(2)}</p>
        </article>
    )
}
