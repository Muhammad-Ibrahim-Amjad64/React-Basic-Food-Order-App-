import  ReactDOM from "react-dom";
import React from "react";

import styles from "./Modal.module.css"

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm} />;
  };



const  ModalOverlay = props=>{
    return(
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
            {/* <div cassName={styles.content}>{props.children}</div> */}
        </div>
            
        
    )
}

const Modal = props=>{
    const portalElement = document.getElementById("modal-root") // ya overlays

    return (
        <>
          {ReactDOM.createPortal(<Backdrop/>,portalElement)}
          {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("modal-root"))}
        </>
    )

}

export default Modal;


// Wrap the item with opening and closing to display it into modal 