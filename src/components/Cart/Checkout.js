import React from "react";
import useHttp from "../../hooks/use-Http";
import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-Input";

const Checkout = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onConfirm({
        name,
        PostalCode,
        City,
        Street,
    })

    resetnameForm();
    resetStreetForm();
    resetPostalCodeForm();
    resetCityForm();
  };

  const nameValidator = (value) => {
    return /^[A-Za-z\s]+$/.test(value);
  };
  const {
    value: name,
    hasError: nameIsInvalid,
    valueIsValid: nameIsValid,
    InputValueHandler: nameInputHandler,
    onBlurInputValueHandler: onBlurnameInputHandler,
    resetForm: resetnameForm,
  } = useInput(nameValidator);

  const PostalCodeValidator = (value) => {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
  };
  const {
    value: PostalCode,
    hasError: PostalCodeIsInvalid,
    valueIsValid: PostalCodeIsValid,
    InputValueHandler: PostalCodeInputHandler,
    onBlurInputValueHandler: onBlurPostalCodeInputHandler,
    resetForm: resetPostalCodeForm,
  } = useInput(PostalCodeValidator);

  const StreetValidator = (value) => {
    return /^[A-Za-z0-9\s]+$/.test(value) ;
  };
  const {
    value: Street,
    hasError: StreetIsInvalid,
    valueIsValid: StreetIsValid,
    InputValueHandler: StreetInputHandler,
    onBlurInputValueHandler: onBlurStreetInputHandler,
    resetForm: resetStreetForm,
  } = useInput(StreetValidator);

  const CityValidator = (value) => {
    return /^[A-Za-z\s]+$/.test(value);
  };
  const {
    value: City,
    hasError: CityIsInvalid,
    valueIsValid: CityIsValid,
    InputValueHandler: CityInputHandler,
    onBlurInputValueHandler: onBlurCityInputHandler,
    resetForm: resetCityForm,
  } = useInput(CityValidator);

  let formIsValid = false;
  if (CityIsValid && StreetIsValid && nameIsValid && PostalCodeIsValid) {
    formIsValid = true;
  }


  const nameInputClasses = `${classes.control} ${
    nameIsInvalid ? classes.invalid : ""
  }`;
    const streetInputClasses = `${classes.control} ${
      StreetIsInvalid ?  classes.invalid :''
    }`;
    const postalCodeInputClasses = `${classes.control} ${
        PostalCodeIsInvalid ?  classes.invalid :''
    }`;
    const cityInputClasses = `${classes.control} ${
        CityIsInvalid ?  classes.invalid :''
    }`;

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          value={name}
          id="name"
          onChange={nameInputHandler}
          onBlur={onBlurnameInputHandler}
        />
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input
          value={Street}
          type="text"
          id="street"
          onChange={StreetInputHandler}
          onBlur={onBlurStreetInputHandler}
        />
      </div>
      <div className={postalCodeInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          value={PostalCode}
          type="text"
          id="postal"
          onChange={PostalCodeInputHandler}
          onBlur={onBlurPostalCodeInputHandler}
        />
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input
          value={City}
          type="text"
          id="city"
          onChange={CityInputHandler}
          onBlur={onBlurCityInputHandler}
        />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
