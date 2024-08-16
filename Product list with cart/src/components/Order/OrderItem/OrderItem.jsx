import "./OrderItem.css"
export default function OrderItem({item}){
   const BASE_PATH = "../../../images/image-waffle-desktop.jpg";
   console.log(item);

   return(
    <>
     <article className="order-item">
         <div className="about-order-item">
            <div className="item-img-container">
                <img src={require(`../../../images/${item.imgName}`)}></img>
            </div>
            <div className="order-item-info">
                <h5 className="order-item-title">{item.name}</h5>
                <div className="order-item-amount">
                    <p className="order-item-quantity">{item.count}x</p>
                    <p className="order-item-price">${Number(item.price).toFixed(2)}</p>
                </div>
            </div>
         </div>
         <p className="order-item-total-price">${Number(item.totalPrice).toFixed(2)}</p>
      </article>
      <hr className="separator"/>
    </>
   )   
}