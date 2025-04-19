import "./CartsCard.css";
import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartsCard = ({cart}) => {
  const {image, name, color, size, price, quantity} = cart;

  return (
    <>
      <div className="main_carts_card_container">
        <div className="carts_card_image_container">
          <img
            src={image}
            alt="product image"
          />
        </div>

        <div className="carts_card_info_container">
          <div className="title_and_delete_container">
            <h2>{name}</h2>
            <button>
              <RiDeleteBin6Line />
            </button>
          </div>

          <ul>
            <li>Size: {size}</li>
            <li>Color: {color}</li>
          </ul>

          <ul className="product_price_and_quantity_container">
            <li>${price}</li>
            <li>Quantity: {quantity}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

CartsCard.propTypes = {
  cart: PropTypes.object,
};

export default CartsCard;
