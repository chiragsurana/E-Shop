import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function App() {
  const [{basket},dispatch]=useStateValue();
  useEffect(()=>{
 auth.onAuthStateChanged((authUser)=>{
  if (authUser) {
    // the user just logged in / the user was logged in

    dispatch({
      type: "SET_USER",
      user: authUser,
    });
  } else {
    // the user is logged out
    dispatch({
      type: "SET_USER",
      user: null,
    });
  }
});
}, []);
  return (
    <>
    
    <BrowserRouter>
    <div className="App">
       <Switch>
       <Route  path="/checkout"><h1> <Header/><Checkout/></h1></Route>
       <Route  path="/login"><h1> <Login/></h1></Route>
       <Route  path="/">
      <Header/>  
       <Home/> </Route>
       </Switch>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
