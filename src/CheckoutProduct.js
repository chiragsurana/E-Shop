import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
console.log('99');
const CheckoutProduct = ({id,title,image,price,rating}) => {
    console.log(id);
    const [{basket},dispatch]=useStateValue();


    const  removeFromBasket=()=>{
dispatch({
    type:"REMOVE_FROM_BASKET" 
    ,
    id:id,
});
    }
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="" />
            <div className="checkoutProduct_info">
            <p className="chekcoutProduct_title">{title} </p>
            <p className="checkoutProduct_Price"><small>$</small> {price} </p>
            <div className="checkoutProduct_rating">
            { 
                Array(rating)
.fill()
.map((_)=>{
    <p>*</p>
})
      }
            </div> 
            <button onClick={removeFromBasket}  >Remove </button>
            </div>
          
  
        </div>
    )
}

export default CheckoutProduct;
