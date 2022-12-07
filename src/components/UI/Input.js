import React from 'react';



import styles from './Input.module.css';

const Input = React.forwardRef((props,ref) => {
  
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}   />
      {/* <input {...props.input} {...{min:3,max:6}}  /> */}
    
    </div>
  );
});

export default Input;

// YE STANDARD FOR EXCESSING INPUT 

// <Input
//input={{ id: "MealInput", min: 1, max: 5, step: 1, type: "number" }}
//label="Amount"
//></Input> 

// import React from "react"
// import classes from './Input.module.css';


// const Input  = props =>{

//     return(
//      <>
//         <div
//         className={`${classes.control} ${
//            props.isValid=== false ? classes.invalid : ''
//         }`}
//         >
//         <label htmlFor={props.id}>{props.label}</label>
//         <input
//         type={props.type}
//         id={props.id}
//         value={props.value}
//         onChange={props.onChange}
//         onBlur={props.onBlur}
          
//         />
//       </div>

//           </>
//     )
// }

// export default Input 

// Ye ye props dainay hn gy      
// <Input
// label="E-mail"
// type="email"
// id="email"
// isValid={isValidEmail}
// value={EmailState.value}
// onChange={emailChangeHandler}
// onBlur={validateEmailHandler}
// />