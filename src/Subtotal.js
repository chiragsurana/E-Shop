import { SportsBasketball } from '@material-ui/icons';
import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import './Subtotal.css';
import {getBasketTotal} from './reducer.js';
const Subtotal = ( ) => {
  
    const [{basket},dispatch]=useStateValue();
     
    console.log(basket);
     
    return (
        <div className="subtotal">
  
            <CurrencyFormat 
            renderText={(value)=>{
                <>
                <p>Subtotal ({basket.length} items) :<strong> {`${value}`}</strong></p>
              <small className="subtotal_gift">
             
              </small>
              
                </>
            }}


            decimalScale={2}
            value={getBasketTotal(basket)}
           
            thousandSeparator={true}
            prefix={"$"}
            />
            <button> Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
