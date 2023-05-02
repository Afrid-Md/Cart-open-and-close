import Header from './Components/Layout/Header';
import './App.css';
import { Fragment, useState } from 'react';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';



function App() {

  const [cart, setCart]=useState(false);

  const ShowCartHandler=()=>{
    setCart(true);
  }
  const hideCart=()=>{
      setCart(false);
}
  
  return (
    <Fragment>
         {cart && <Cart onHideCart={hideCart}/>}
        <Header onShowCart={ShowCartHandler}/>
        <main>
          <Meals/>
        </main>
    </Fragment>
  );
}

export default App;
