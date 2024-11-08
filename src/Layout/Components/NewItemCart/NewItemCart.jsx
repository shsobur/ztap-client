import "./NewItemCart.css";
import PropTypes from "prop-types";

const NewItemCart = ({ newItem }) => {
  return (
    <>
      <div className="main_container">
        <div className="new_item_cart_outer_container">
          <div className="main_cart_container">
            <div className="cart_image_container">
              <img src={newItem.images[0]} alt="Prodict image" />
            </div>

            <div className="main_cart_item_info_container">
              <div className="cart_item_info_container">
                <h2>{newItem.name}</h2>
                <h4>{newItem.category}</h4>
              </div>

              <div className="cart_price_info_container">
                <h2>${newItem.newPrice}</h2>
                <h3>${newItem.oldPrice}</h3>
                <h4>{newItem.savings}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NewItemCart.propTypes = {
  newItem: PropTypes.object,
};

export default NewItemCart;