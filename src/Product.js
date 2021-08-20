import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';
const Product = ({title,id,image,price,rating}) => {
    const [{basket},dispatch]=useStateValue();
    const  addToBasket=()=>{
        
dispatch({
    type:'ADD_TO_BASKET',
    item:{
        id:id,
        title:title,
        image:image,
        rating:rating,
        price:price
    }

})
alert(`${title} was added to the cart`);
    }
     
    return (
        <div className="product">
        <div className="product_info">
        <p>{title}</p>
        <p className="product_"><small>$</small>{price}</p>
            
            </div>
            <img src={image} />
            <button onClick={addToBasket} className="prod_but">Add to Cart</button>
        </div>
    )
}

export default Product
