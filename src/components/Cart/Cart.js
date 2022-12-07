import styles from "./Cart.module.css";
import React, { useContext } from "react";
import Modal from "../UI/Modal";
import cartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useState } from "react";
import useHttp from "../../hooks/use-Http";

const Cart = (props) => {
  const [isSubmitted,setIsSubmitted]= useState(false)

  const ctx = useContext(cartContext);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const haveItems = ctx.cartItems.length > 0;

  const {
    error,
    isLoading: submittingData,
    sendRequest: sendOrderRequest,
  } = useHttp();

  const CartAddItemsHandler = (item) => {
    // requirements
    // //
    // const cartItemIndex =ctx.cartItems.findIndex((citem)=>citem.id===item.id)
    // const cartItem= ctx.cartItems[cartItemIndex]
    // let updatedCartItem
    if (true) {
      ctx.addItem({
        ...item,
        amount: 1,
      });
    }
  };

  const OrderitemHandler = () => {
    setShowOrderForm(true); // checkout form
  };

  const CartRemoveHandler = (id) => {
    // const updatedCartItem = ctx.cartItems.find((item)=>item.id===id)
    // console.log(updatedCartItem, "ye item ha nabiha")
    // ctx.removeItem({...updatedCartItem,amount:1})
    ctx.removeItem(id);
  };

  // OUTPUTTING THE CART ITEMS AND MAPPING THEM
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {ctx.cartItems.map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          amount={item.amount}
          key={item.id}
          // yaha pr bind lagana preconfigure kr dia ke is argument ke ilawa koi nai
          onAdd={CartAddItemsHandler.bind(null, item)}
          onRemove={CartRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
    // <ul className={styles['cart-items']}>
    //   {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
    //     <li>{item.name}</li>
    //   ))}
    // </ul>
  );

  const modalActionsButtons = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={props.onhideCart}>
        Close
      </button>
      {haveItems && (
        <button onClick={OrderitemHandler} className={styles.button}>
          Order
        </button>
      )}
    </div>
  );
  let errorMsg;
  const formSubmitHandler = (userData) => {
    sendOrderRequest({
      url: "https://react-http-prectice-default-rtdb.firebaseio.com/tasks.json",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userData, orderedItems: ctx.cartItems }),
    });

    if (error) {
      errorMsg = <p>{error}</p>;
    } 
    setIsSubmitted(true)
    ctx.clearCart()

  };

  const Submitting = <p>Submitting your order ...</p>;
  const cartContent = (
    <>
      {cartItems}

      <div className={styles.total}>
        <span>Total Amount</span>
        {/* <span>{ctx.Amount}</span> */}
        <span>{`$${ctx.totalAmount.toFixed(2)}`}</span>
      </div>
      {showOrderForm && (
        <Checkout onConfirm={formSubmitHandler} onCancel={props.onhideCart} />
      )}
      {errorMsg}
      {!showOrderForm && modalActionsButtons}
    </>
  );

  const successfullySubmitted = (
    <>
      <p>
        Successfully submitted your order. You will receive your items soon :)
      </p>
          <div className={styles.actions}>
      <button onClick={props.onhideCart} className={styles.button} >OK</button>
    </div>
    </>
  );


  return (
    <Modal>
      {submittingData && Submitting}
      {!isSubmitted&&!submittingData && cartContent}
      {isSubmitted&&successfullySubmitted}
    </Modal>
  );
};

export default Cart;
