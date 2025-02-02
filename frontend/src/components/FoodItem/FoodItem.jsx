import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from "../../assets/assets";
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({ id, image, name, description, price }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-counter">
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add" />
          </div>
        )}
      </div>
      <div className="food-item-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;