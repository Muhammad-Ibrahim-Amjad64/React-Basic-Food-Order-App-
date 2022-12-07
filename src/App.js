
import './App.css';
import Header from "./components/Layout/Header"
import Meals from './components/Meals/Meals';
// import Modal from "./components/UI/Modal"
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/store/CartContextProvider';
import { useState } from 'react';
function App() {
  const [showCart,setShowCart]=useState(false)
  const showCartHandler = ()=>{
    setShowCart(true)
  }
  const hideCartHandler = ()=>{
    setShowCart(false)
  }
  return (
  <CartContextProvider>
  {showCart&&<Cart  onhideCart={hideCartHandler}/>}
  <Header onshowCart={showCartHandler}/>
  <Meals/>
  {/* <Modal><Cart/></Modal>    or wrap the Cart component with the modal */ }
</CartContextProvider>
  );
}

export default App;
