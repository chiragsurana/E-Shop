import React from 'react'
import {useStateValue} from './StateProvider';
import './Checkout.css'; 
import CheckoutProduct from './CheckoutProduct';
import { InsertComment } from '@material-ui/icons';
import CurrencyFormat from 'react-currency-format';
import Subtotal from './Subtotal';
const Checkout = () => {
    const [{basket}]=useStateValue();
   
    return (
        <div className="checkout">
            here is it 

            {basket?.length===0 ?(
                <div>
                <h2>Your shopping Basket is Empty</h2>
                </div>
            ):(
                <div >
                <h2 className="checkout_title">your shopping Basket</h2>
                <div className="scroll">
                {basket.map(item=>(
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
                </div>
                </div>
            ) }
            {basket.length >0 &&(
                <div className="checkout_right">
                <Subtotal/>
                </div>
            )}
            
        </div>
    )
}

export default Checkout
