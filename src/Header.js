import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
 
import { useStateValue } from './StateProvider';
const Header = () => {
    const [{basket}] =useStateValue();
    
    return (

        <nav className=" header">
        <Link to ="/">
         <img className="header_logo" className="pccc" alt=" " src="data:image/png;base64,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"/>  
         </Link>
         <div className="header_search">
         <h3 class="eshop">E-Shop</h3>
         <input type="text" className="header_searchInput"></input>
         <SearchIcon className="header_searchIcon"></SearchIcon>
         </div>

         <div className="header_nav">
    {/*link 1 */}
         <Link  to="/login" className="header_link">
         <div className="header_option">
         <span className="header_optionLineOne">Hello  </span>
         <span className="header_optionLineTwo" >Sign In</span>
         </div>
         </Link>
         {/*link 2*/}
         <Link  to="/" className="header_link">
         <div className="header_option">
         <span className="header_optionLineOne">Returns </span>
         <span  className="header_optionLineTwo"> & Orders</span>
         
         </div>
         </Link>
         {/*link 3*/}
         <Link  to="/" className="header_link">
         <div className="header_option">
         <span className="header_optionLineOne">Credits</span>
         <span  className="header_optionLineTwo">& Rewards</span>
         </div>
         </Link>

         <Link to="/checkout" className="header_link">
         <div className="header_optionBasket">
         <img  className= "icon"src="https://image.flaticon.com/icons/png/128/3393/3393756.png"></img>
         <span>{basket?.length}</span>
         </div>
         </Link>
         </div>
         </nav>
    )
}

export default Header;
