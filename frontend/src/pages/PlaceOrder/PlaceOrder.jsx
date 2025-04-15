import React, { useContext } from 'react';
import { StoreContext } from '../../components/context/StoreContext';
import './PlaceOrder.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlaceOrder = () => {
  const { getTotalCartAmount, setCartItems } = useContext(StoreContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (getTotalCartAmount() > 0) {
      toast.success('Payment done! Your food will arrive in 30 minutes.', {
        position: 'top-center',
        autoClose: 3000, // Close after 3 seconds
      });

      // Clear the cart
      setCartItems({});
    }
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name="firstName" type="text" placeholder="First name" />
          <input required name="lastName" type="text" placeholder="Last name" />
        </div>
        <input required name="email" type="text" placeholder="Email Address" />
        <input required name="street" type="text" placeholder="Street" />
        <div className="multi-fields">
          <input required name="city" type="text" placeholder="City" />
          <input required name="state" type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input required name="zipcode" type="text" placeholder="Zip Code" />
          <input required name="country" type="text" placeholder="Country" />
        </div>
        <input required name="phone" type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotals</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;