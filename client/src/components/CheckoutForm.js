import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

const initialValues = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [inputValues, handleChanges] = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={inputValues.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={inputValues.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={inputValues.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input
            name="city"
            value={inputValues.city}
            onChange={handleChanges}
          />
        </label>
        <label>
          State:
          <input
            name="state"
            value={inputValues.state}
            onChange={handleChanges}
          />
        </label>
        <label>
          Zip:
          <input name="zip" value={inputValues.zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {inputValues.firstName} {inputValues.lastName}
          </p>
          <p>{inputValues.address}</p>
          <p>
            {inputValues.city}, {inputValues.state} {inputValues.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
